package com.stackroute.pie.services;

import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.domain.Role;
import com.stackroute.pie.domain.RoleName;
import com.stackroute.pie.message.request.SignUpForm;
import com.stackroute.pie.repository.InsurerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class InsurerServiceImpl implements  InsurerService{

    private InsurerRepository insurerRepository;
  
    private PasswordEncoder passwordEncoder;

    @Autowired
    public InsurerServiceImpl(InsurerRepository insurerRepository) {
        this.insurerRepository = insurerRepository;
        //this.passwordEncoder = passwordEncoder;
    }

    public Insurer addNewPolicy(Policy policy) {
        String name = policy.getInsurerName();
        Insurer insurer1 = insurerRepository.findByInsurerName(name).get();
        List<Policy> policies = new ArrayList<>();
        policies = insurerRepository.findByInsurerName(name).get().getPolicies();
        policies.add(policy);
        insurer1.setPolicies(policies);
        insurerRepository.deleteByInsurerName(name);
        insurerRepository.save(insurer1);
        return insurerRepository.findByInsurerName(name).get();
    }


    public List<Policy> getPolicies(String insurerLicense) {
        Insurer insurer1 = insurerRepository.findByInsurerLicense(insurerLicense).get();
        return insurer1.getPolicies();
    }


    public Insurer deletePolicy(String insurerName,long policyId) {
        Insurer insurer1 = insurerRepository.findByInsurerName(insurerName).get();
        List<Policy> policies = insurer1.getPolicies();
        List<Policy> newPolicy  = new ArrayList<>();
        for(Policy p:policies)
        {
            if(p.getPolicyId() != policyId){
                newPolicy.add(p);
            }
        }
        insurer1.setPolicies(newPolicy);
        insurerRepository.deleteByInsurerName(insurer1.getInsurerName());
        insurerRepository.save(insurer1);

        return insurer1;

    }

    @Override
    public Insurer addInsurer(SignUpForm signUpRequest) {
        List<Policy> policies = new ArrayList<>();
        Insurer insurer = new Insurer(signUpRequest.getInsurerName(),signUpRequest.getInsurerLicense(),signUpRequest.getInsurerEmail(),signUpRequest.getPassword(),signUpRequest.getInsurerAddress(),signUpRequest.getSecurityQuestion(),signUpRequest.getSecurityAnswer(),policies);
        insurer.setPolicies(policies);
        System.out.println("service" +insurer);
        Set<Role> roles = new HashSet<>();
        Role userrRole = new Role();
        userrRole.setName(RoleName.ROLE_INSURER);
        roles.add(userrRole);
        insurer.setRoles(roles);
        Insurer insurer1 = insurerRepository.save(insurer);
        return insurer1;
    }
}
