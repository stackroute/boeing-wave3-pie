package com.stackroute.service;

import com.stackroute.domain.Policy;
import com.stackroute.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PolicyServiceImpl implements PolicyService {

    private PolicyRepository policyRepository;
    private KafkaTemplate<String, Policy> kafkaTemplate;

    @Autowired
    PolicyServiceImpl(PolicyRepository policyRepository, KafkaTemplate<String, Policy> kafkaTemplate) {
        this.policyRepository = policyRepository;
        this.kafkaTemplate = kafkaTemplate;
    }
    //Method for adding the policy for insurer
    @Override
    public ResponseEntity<?> addPolicy(Policy policy) {
        if(policyRepository.existsByPolicyIdAndInsurerName(policy.getPolicyId(),policy.getInsurerName()) == true) {
            return new ResponseEntity<>("Policy already exists",
                    HttpStatus.NOT_FOUND);
        }
        Policy policy1 = new Policy(policy.getInsurerName(),policy.getInsurerLicense(),policy.getPolicyName(),
                policy.getPolicyId(),policy.getMinAge(),policy.getMaxAge(),policy.getMinimumPremium(),
                policy.getSumInsured(), policy.getPolicyDescription());
        policyRepository.save(policy1);
        Policy policy2 = policyRepository.findByUniqueId(policy1.getUniqueId()).get();
        System.out.println(policy2);
        kafkaTemplate.send("policy_added",policy2);
        return new ResponseEntity<>("Policy has been added", HttpStatus.CREATED);
    }

    //Method for deleting the policy for insurer
    @Override
    public ResponseEntity<?> deletePolicy(Policy policy) {
        if(policyRepository.existsByPolicyIdAndInsurerName(policy.getPolicyId(),policy.getInsurerName()) == false) {
            return new ResponseEntity<>("Policy doesn't exist", HttpStatus.NOT_FOUND);
        }
        policyRepository.delete(policy);
        return new ResponseEntity<>("Policy has been deleted", HttpStatus.OK);
    }

    //Method for getting the policy for insurer
    @Override
    public ResponseEntity<?> getPolicy(String insurerName) {
        if(policyRepository.existsByInsurerName(insurerName) == false) {
            return new ResponseEntity<>("Policies doesn't exist under that insurer", HttpStatus.NOT_FOUND);
        }

        List<Policy> policies= policyRepository.findByInsurerName(insurerName).get();
        return new ResponseEntity<>(policies, HttpStatus.FOUND);
    }


    //Method to find policy based on insurerName and policyName
    @Override
    public ResponseEntity<?> getPolicyForUser(String insurerName, String policyName) {
        if(policyRepository.existsByInsurerName(insurerName) == false) {
            return new ResponseEntity<>("Policies doesn't exist under that insurer", HttpStatus.NOT_FOUND);
        }
        if(policyRepository.existsByPolicyNameAndInsurerName(policyName,insurerName) == false) {
            return new ResponseEntity<>("The requested policy doesn't exist", HttpStatus.NOT_FOUND);
        }
        Policy policy = policyRepository.findByInsurerNameAndPolicyName(insurerName,policyName).get();
        return new ResponseEntity<>(policy, HttpStatus.FOUND);
    }

    //Method for adding the inusredName
    @Override
    public ResponseEntity<?> addInsured(String insurerName, String policyName, String insuredName) {
        if(policyRepository.existsByInsurerName(insurerName) == false) {
            return new ResponseEntity<>("Policies doesn't exist under that insurer", HttpStatus.NOT_FOUND);
        }
        if(policyRepository.existsByPolicyNameAndInsurerName(policyName,insurerName) == false) {
            return new ResponseEntity<>("The policy doesn't exist under that insurer", HttpStatus.NOT_FOUND);
        }
        Policy policy = policyRepository.findByUniqueId(insurerName+policyName).get();
        List<String> insuredList = policy.getInsuredList();
        insuredList.add(insuredName);
        policy.setInsuredList(insuredList);
        policyRepository.save(policy);
        return new ResponseEntity<>(policyRepository.findByInsurerNameAndPolicyName(insurerName,policyName).get(),
                HttpStatus.ACCEPTED);
    }

    //Method for deleting the insuredName from the policy
    @Override
    public ResponseEntity<?> deleteInsured(String insurerName, String policyName, String insuredName) {
        if(policyRepository.existsByInsurerName(insurerName) == false) {
            return new ResponseEntity<>("Policies doesn't exist under that insurer", HttpStatus.NOT_FOUND);
        }
        if(policyRepository.existsByPolicyNameAndInsurerName(policyName,insurerName) == false) {
            return new ResponseEntity<>("The policy doesn't exist under that insurer", HttpStatus.NOT_FOUND);
        }
        Policy policy = policyRepository.findByUniqueId(insurerName+policyName).get();
        List<String> insuredList = policy.getInsuredList();
        insuredList.remove(insuredName);
        policy.setInsuredList(insuredList);
        policyRepository.save(policy);
        return new ResponseEntity<>(policyRepository.findByInsurerNameAndPolicyName(insurerName,policyName).get(),
                HttpStatus.ACCEPTED);
    }

    //Method to get the policies of the User
    @Override
    public ResponseEntity<?> getPoliciesOfUser(String insuredName) {
        List<Policy> policies = policyRepository.findAll();
        List<Policy> insuredPolicies = new ArrayList<>();
        for(int i = 0; i < policies.size(); i++) {
            Policy policy = policies.get(i);
            if(policy.getInsuredList().contains(insuredName) == true) {
                insuredPolicies.add(policy);
            }
        }
        if(insuredPolicies.size() == 0) {
            return new ResponseEntity<>("No policies are found for that insured", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(insuredPolicies, HttpStatus.FOUND);
    }
}
