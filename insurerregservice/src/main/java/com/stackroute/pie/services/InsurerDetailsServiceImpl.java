package com.stackroute.pie.services;

import com.stackroute.pie.model.Insurer;
import com.stackroute.pie.Repository.InsurerRepository;
import com.stackroute.pie.model.Policy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

//import javax.transaction.Transactional;

@Service
public class InsurerDetailsServiceImpl implements UserDetailsService {


    private InsurerRepository insurerRepository;

    InsurerDetailsServiceImpl(InsurerRepository insurerRepository) {
        this.insurerRepository = insurerRepository;
    }


    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Insurer insurer = insurerRepository.findByInsurerLicense(username).orElseThrow(
                () -> new UsernameNotFoundException("Insurer Not Found with -> username or email : " + username));

        return InsurerPrinciple.build(insurer);
    }

    public Insurer addNewPolicy(Policy policy) {
        String name = policy.getInsurerName();
        Insurer insurer1 = insurerRepository.findByInsurerName(name).get();
//        Insurer insurer = new Insurer();
        List<Policy> policies;
        policies = insurer1.getPolicies();
        policies.add(policy);
        insurer1.setPolicies(policies);
        for(int i = 0; i < policies.size(); i++) {
            System.out.println(policies.get(i));
        }
        insurerRepository.deleteByInsurerName(name);
        insurerRepository.save(insurer1);
        return insurer1;
    }


    public List<Policy> getPolicies(String insurerLicense) {
        Insurer insurer1 = insurerRepository.findByInsurerLicense(insurerLicense).get();
        return insurer1.getPolicies();
    }


    public Insurer deletePolicy(String insurerName,long policyId) {
//        Insurer insurer1 = insurerRepository.findByInsurerLicense(insurerLicense).get();
//        System.out.println("Insurer data is "+insurer1.toString());
        // Policy policy1 = insurerRepository.findByPoliciesPolicyId(policyId);
//        System.out.println("Policy Id:"+policy1.getPolicyId());
//        System.out.println("policy1 is "+policy1);
//        return policy1;
//
//  insurerRepository.deleteByPoliciesPolicyId(policyId);
//
        Insurer insurer1 = insurerRepository.findByInsurerName(insurerName).get();
        List<Policy> policies = insurer1.getPolicies();
        List<Policy> newPolicy  = new ArrayList<>();
        for(Policy p:policies)
        {
            if(p.getPolicyId() != policyId){
                newPolicy.add(p);

//                System.out.println(p);
//                System.out.println( "after"+insurerRepository.findByPoliciesPolicyId(policyId).toString());
//                break;
            }
        }

        insurer1.setPolicies(newPolicy);
        insurerRepository.deleteByInsurerName(insurer1.getInsurerName());
        insurerRepository.save(insurer1);

        return insurer1;

    }
}
