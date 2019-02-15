package com.stackroute.pie.services;

import com.stackroute.pie.model.Insurer;
import com.stackroute.pie.repository.InsurerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class InsurerDetailsServiceImpl implements UserDetailsService {

    private InsurerRepository insurerRepository;
    @Autowired
    public InsurerDetailsServiceImpl(InsurerRepository insurerRepository){
        this.insurerRepository = insurerRepository;
    }


    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Insurer user = insurerRepository.findByInsurerName(username).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found with -> username or email : " + username));

        return InsurerPrinciple.build(user);
    }
}
