package com.stackroute.pie.services;

import com.stackroute.pie.model.Insurer;
import com.stackroute.pie.Repository.InsurerRepository;
import com.stackroute.pie.model.Policy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
