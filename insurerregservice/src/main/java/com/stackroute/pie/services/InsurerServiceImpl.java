package com.stackroute.pie.services;

import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Role;
import com.stackroute.pie.domain.RoleName;
import com.stackroute.pie.message.request.SignUpForm;
import com.stackroute.pie.repository.InsurerRepository;
import com.stackroute.pie.domain.Policy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    public Insurer addInsurer(SignUpForm signUpForm) {
        Insurer insurer = new Insurer(signUpForm.getInsurerName(), signUpForm.getInsurerLicense(), signUpForm.getInsurerEmail(),
                passwordEncoder.encode(signUpForm.getPassword()),signUpForm.getInsurerAddress(),signUpForm.getSecurityQuestion(),signUpForm
                .getSecurityAnswer());
        Set<Role> roles = new HashSet<>();
        Role userrRole = new Role();
        userrRole.setName(RoleName.ROLE_INSURER);
        roles.add(userrRole);
        insurer.setRoles(roles);
        Insurer insurer1 = insurerRepository.save(insurer);
        return insurer1;
    }
}
