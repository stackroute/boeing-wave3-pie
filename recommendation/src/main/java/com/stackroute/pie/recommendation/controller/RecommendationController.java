package com.stackroute.pie.recommendation.controller;


import com.stackroute.pie.recommendation.domain.insured;
import com.stackroute.pie.recommendation.domain.insurer;
import com.stackroute.pie.recommendation.domain.policy;
import com.stackroute.pie.recommendation.service.RecommendationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

import static java.util.Arrays.asList;

@RestController
@RequestMapping("rest/neo4j/recommendations")
@CrossOrigin("*")
public class RecommendationController {

    @Autowired
    RecommendationServiceImpl recommendationService;
    @Autowired
    private KafkaTemplate<String, List<policy>> kafkaTemplate;

    @GetMapping("policies")
    public List<policy> getAll(){
        List<policy> policyList=recommendationService.displayPolicy();
        kafkaTemplate.send("yoyo_json",policyList);
        return policyList;

    }

    @GetMapping("policyByuserName/{userName}")
    public  List<policy> getByname(@PathVariable("userName") String userName){
        System.out.println("in controller");
        List<policy> policiyy=recommendationService.getByUserName(userName);
        System.out.println(policiyy);
        return policiyy;
    }


    @GetMapping("policyByuserAge/{userAge}")
    public  List<policy> getByAge(@PathVariable("userAge") Integer userAge){
        System.out.println("in controller");
        List<policy> policiyy=recommendationService.getByAge(userAge);
        System.out.println(policiyy);
        return policiyy;
    }


    @GetMapping("policyByuserGender/{userGender}")
    public  List<policy> getByGender(@PathVariable("userGender") String userGender){
        System.out.println("in controller");
        List<String> userGenderList;
        List<policy> policiyy=null;
        if(userGender.equals("male"))
        {
            userGenderList= asList("male");
            policiyy=recommendationService.getByGender(userGenderList);
            System.out.println(policiyy);

        }
        else if(userGender.equals("female"))
        {
            userGenderList= asList("female");
            policiyy=recommendationService.getByGender(userGenderList);
            System.out.println(policiyy);
        }
        else if(userGender.equals("both"))
        {
            userGenderList= asList("male", "female");
            policiyy=recommendationService.getByGender(userGenderList);
            System.out.println(policiyy);
        }
//        List<policy> policiyy=recommendationService.getByGender();
        System.out.println("end: "+policiyy);
        return policiyy;
    }
    @GetMapping("policyByDisease/{policyDisease}")
    public  List<policy> getByDisease(@PathVariable("policyDisease") String policyDisease){
        System.out.println("in controller");
        List<String> policyDiseaseName=Arrays.asList(policyDisease);

        List<policy> policiyy=recommendationService.getByDisease(policyDiseaseName);
        System.out.println(policiyy);
        return policiyy;
    }

@PostMapping("insurer")
    public ResponseEntity<?> saveInsurer(@RequestBody insurer Insurer){
        ResponseEntity responseEntity;
        insurer Insurer1=recommendationService.createInsurer(Insurer);
        responseEntity= new ResponseEntity<insurer>(Insurer1,HttpStatus.CREATED);
        return responseEntity;
    }

@PostMapping("policy")
    public  ResponseEntity<?> savePolicy(@RequestBody policy Policy){
        ResponseEntity responseEntity;
        policy Policy1=recommendationService.createPolicy(Policy);
        responseEntity=new ResponseEntity<policy>(Policy1,HttpStatus.CREATED);
        return responseEntity;
}

@PostMapping("insured")
    public ResponseEntity<?> saveInsured(@RequestBody insured Insured){
        ResponseEntity responseEntity;
        insured Insured1=recommendationService.createInsurer(Insured);
        responseEntity=new ResponseEntity<insured>(Insured1,HttpStatus.CREATED);
        return responseEntity;


}


}
