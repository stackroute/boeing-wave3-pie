package com.stackroute.pie.services;

import com.stackroute.pie.domain.Insured;
import com.stackroute.pie.repository.UserRepository;
import com.stackroute.pie.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//import javax.transaction.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    UserRepository userRepository;


    @Autowired

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }




    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Insured insured = userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("Insured Not Found with -> username or email : " + username));

        return UserPrinciple.build(insured);
    }

    public Insured getRequests(int insuredId) throws UserNotFoundException {
        if(userRepository.existsByInsuredId(insuredId)) {

            Insured insured1 = userRepository.findByInsuredId(insuredId).get();
            return insured1;
        }
        else
            throw new UserNotFoundException();
    }

    //to post the dummy requests to the database
    public Insured postRequest(Insured insured){
        Insured insured1 = userRepository.save(insured);
        return insured1;
    }



public Insured getProfile(String username) throws UserNotFoundException{
    if(userRepository.existsByUsername(username)){
//            System.out.println("service" + userRepository.existsByUsername(username));
        Insured insured1 = userRepository.findByUsername(username).get();
//            System.out.println(insured1);
        return insured1;
    }
    else
        throw new UserNotFoundException();
}
    public Insured updateProfile(String username, Insured insured) throws UserNotFoundException{

        if(userRepository.existsByUsername(username)) {
            Insured insured1 = userRepository.findByUsername(username).get();
            insured1.setEmail(insured.getEmail());
            insured1.setFullName(insured.getFullName());
            insured1.setGender(insured.getGender());
            insured1.setPassword(insured.getPassword());
            insured1.setUsername(insured.getUsername());
            insured1.setSecurityAnswer(insured.getSecurityAnswer());
            Insured insured2 = userRepository.save(insured);
            return insured1;
        }
        else
            throw new UserNotFoundException();
    }

}
