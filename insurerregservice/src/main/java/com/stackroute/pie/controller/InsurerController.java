package com.stackroute.pie.controller;

import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.domain.Role;
import com.stackroute.pie.domain.RoleName;
import com.stackroute.pie.message.request.SignUpForm;
import com.stackroute.pie.message.response.ResponseMessage;
import com.stackroute.pie.repository.InsurerRepository;
import com.stackroute.pie.services.InsurerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1")
public class InsurerController {

    @Autowired
    InsurerRepository insurerRepository;


    PasswordEncoder passwordEncoder;
    @Autowired
    InsurerServiceImpl insurerService;

    @Autowired
    private KafkaTemplate<String, Insurer> kafkaTemplate;

    //Method for registering a new Insurer
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpForm signUpRequest) {
        if (insurerRepository.existsByInsurerLicense(signUpRequest.getInsurerLicense())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
                    HttpStatus.CONFLICT);
        }

        if (insurerRepository.existsByInsurerEmail(signUpRequest.getInsurerEmail())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
                    HttpStatus.CONFLICT);
        }
        System.out.println("Incoming");
        System.out.println(signUpRequest);
        //Calling InsurerService to add into the MongoDB
        Insurer insurer = insurerService.addInsurer(signUpRequest);
        //Kafka producing the Insurer pojo ,so that login microservice can consume it
        kafkaTemplate.send("company_1_json",insurer);
        return new ResponseEntity<>(new ResponseMessage("Insurer registered successfully!"), HttpStatus.OK);
    }

    //Method for adding a new policy for existing insurer
    @PutMapping("/policy/newpolicy")
    public ResponseEntity<?> addNewPolicy(@RequestBody Policy insurerPolicy){
        Insurer insurer = insurerService.addNewPolicy(insurerPolicy);
        kafkaTemplate.send("insurer_policy_json",insurer);
        return new ResponseEntity<Insurer>(insurer, HttpStatus.OK);
    }

    //Method for displaying the exiting policy
    @GetMapping("/policy/display/{insurerLicense}")
    public ResponseEntity<?> getPolicies(@PathVariable(value = "insurerLicense") String insurerLicense){
        List<Policy> policies = insurerService.getPolicies(insurerLicense);
        return new ResponseEntity<List<Policy>>(policies, HttpStatus.OK);
    }

    //Method for deleting an existing policy
    @PutMapping("/policy/delete/{insurerName}/{policyId}")
    public ResponseEntity<?> deletePolicy(@PathVariable(value = "insurerName") String insurerName, @PathVariable(value = "policyId") long policyId){
        System.out.println("InsurerLicence : "+insurerName + " " +"policyId : "+policyId);
        Insurer insurer = insurerService.deletePolicy(insurerName,policyId);
        return new ResponseEntity<Insurer>(insurer, HttpStatus.OK);
    }
}
