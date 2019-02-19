package com.stackroute.pie.controller;

import com.stackroute.pie.model.Insurer;
import com.stackroute.pie.model.Policy;
import com.stackroute.pie.model.Role;
import com.stackroute.pie.model.RoleName;
import com.stackroute.pie.Repository.RoleRepository;
import com.stackroute.pie.Repository.InsurerRepository;
import com.stackroute.pie.Security.jwt.JwtProvider;
import com.stackroute.pie.message.request.LoginForm;
import com.stackroute.pie.message.request.SignUpForm;
import com.stackroute.pie.message.response.JwtResponse;
import com.stackroute.pie.message.response.ResponseMessage;
import com.stackroute.pie.services.InsurerDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/auth")
public class InsurerController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    InsurerRepository insurerRepository;

    @Autowired
    InsurerDetailsServiceImpl userDetailsService;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    private KafkaTemplate<String, Insurer> kafkaTemplate;
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getInsurerLicense(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
        if (insurerRepository.existsByInsurerLicense(signUpRequest.getInsurerLicense())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if (insurerRepository.existsByInsurerEmail(signUpRequest.getInsurerEmail())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating insurer's account
        Insurer insurer = new Insurer(signUpRequest.getInsurerName(), signUpRequest.getInsurerLicense(), signUpRequest.getInsurerEmail(),
                encoder.encode(signUpRequest.getPassword()),signUpRequest.getInsurerAddress(),signUpRequest.getSecurityQuestion(),signUpRequest
        .getSecurityAnswer());

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        Role userrRole = new Role();
        userrRole.setName(RoleName.ROLE_INSURER);
        roles.add(userrRole);
        insurer.setRoles(roles);
        insurerRepository.save(insurer);

        kafkaTemplate.send("company_1_json",insurer);

        return new ResponseEntity<>(new ResponseMessage("Insurer registered successfully!"), HttpStatus.OK);
    }

    @PutMapping("/policy/newpolicy")
    public ResponseEntity<?> addNewPolicy(@RequestBody Policy insurerPolicy){
        Insurer insurer = userDetailsService.addNewPolicy(insurerPolicy);
        kafkaTemplate.send("insurer_policy_json",insurer);
        return new ResponseEntity<Insurer>(insurer, HttpStatus.OK);
    }
    @GetMapping("/policy/display/{insurerLicense}")
    public ResponseEntity<?> getPolicies(@PathVariable(value = "insurerLicense") String insurerLicense){
        List<Policy> policies = userDetailsService.getPolicies(insurerLicense);
        return new ResponseEntity<List<Policy>>(policies, HttpStatus.OK);
    }

    @PutMapping("/policy/delete/{insurerName}/{policyId}")
    public ResponseEntity<?> deletePolicy(@PathVariable(value = "insurerName") String insurerName,@PathVariable(value = "policyId") long policyId){
        System.out.println("InsurerLicence : "+insurerName + " " +"policyId : "+policyId);
        Insurer insurer = userDetailsService.deletePolicy(insurerName,policyId);
//        System.out.println("InsurerLicence : "+policy.getInsurerName() + " " +"policyId : "+policy.getPolicyId());

        return new ResponseEntity<Insurer>(insurer, HttpStatus.OK);
    }
}



