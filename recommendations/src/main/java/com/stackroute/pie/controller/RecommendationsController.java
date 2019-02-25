package com.stackroute.pie.controller;

import com.stackroute.pie.domain.Insured;
import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.service.RecommendationsServImpl;
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
public class RecommendationsController {


    @Autowired
    private KafkaTemplate<String, List<Policy>> kafkaTemplate;

    @Autowired
    RecommendationsServImpl recommendationsServ;
    @PostMapping("insurer")
    public ResponseEntity<?> saveInsurer(@RequestBody Insurer insurer){
        ResponseEntity responseEntity;
        Insurer Insurer1=recommendationsServ.createInsurer(insurer);
        responseEntity= new ResponseEntity<Insurer>(Insurer1, HttpStatus.CREATED);
        System.out.println((Insurer1));
        return responseEntity;
    }



    @PostMapping("policy")
    public ResponseEntity<?> savePolicy(@RequestBody Policy policy){
        ResponseEntity responseEntity;
        Policy Policy1=recommendationsServ.createPolicy(policy);
        responseEntity= new ResponseEntity<Policy>(Policy1, HttpStatus.CREATED);
        System.out.println((Policy1));
        return responseEntity;
    }

    @PostMapping("insured")
    public ResponseEntity<?> saveInsured(@RequestBody Insured insured){
        ResponseEntity responseEntity;
        Insured Insured1=recommendationsServ.createInsured(insured);
        responseEntity= new ResponseEntity<Insured>(Insured1, HttpStatus.CREATED);
        System.out.println((Insured1));
        return responseEntity;
    }

    @PostMapping(value = "relationship/{insurerName}/{policyId}")
    public ResponseEntity<?> linkpolicy(@PathVariable String insurerName,@PathVariable int policyId){
        ResponseEntity responseEntity;
        responseEntity= new ResponseEntity<String>(recommendationsServ.insurerPolicy(insurerName,policyId),HttpStatus.OK);
        return responseEntity;
    }
//
    @PostMapping(value = "relation/{policyId}/{username}")
    public ResponseEntity<?> linkinsured(@PathVariable int policyId,@PathVariable String username){
        ResponseEntity responseEntity;
        responseEntity= new ResponseEntity<String>(recommendationsServ.insuredPolicy(policyId,username),HttpStatus.OK);
        return responseEntity;
    }
//
    @PostMapping(value = "view/{policyId}/{username}")
    public ResponseEntity<?> viewPolicy(@PathVariable int policyId,@PathVariable String username){
        ResponseEntity responseEntity;
        responseEntity= new ResponseEntity<String>(recommendationsServ.viewPolicy(policyId,username),HttpStatus.CREATED);
        return responseEntity;
    }

//    @GetMapping("policies")
//    public List<Policy> getAll(){
//        List<Policy> policyList=recommendationsServ.displayPolicy();
//        return policyList;
//
//    }
//
//    @GetMapping("policyByuserName/{username}")
//    public  List<Policy> getByname(@PathVariable("username") String username){
//        System.out.println("in controller");
//        List<Policy> policiyy=recommendationsServ.getByUserName(username);
//        System.out.println(policiyy);
//        return policiyy;
//    }
//
//
//    @GetMapping("policyByuserAge/{age}")
//    public  List<Policy> getByAge(@PathVariable("age") Integer age){
//        System.out.println("in controller");
//        System.out.println("age=: "+ age);
//        List<Policy> policiyy=recommendationsServ.getByAge(age);
//        System.out.println(policiyy);
//        return policiyy;
//    }
//
//
//    @GetMapping("policyByuserGender/{userGender}")
//    public  List<Policy> getByGender(@PathVariable("userGender") String userGender){
//        System.out.println("in controller");
//        List<String> userGenderList;
//        List<Policy> policiyy=null;
//        if(userGender.equals("male"))
//        {
//            userGenderList= asList("male");
//            policiyy=recommendationsServ.getByGender(userGenderList);
//            System.out.println(policiyy);
//
//        }
//        else if(userGender.equals("female"))
//        {
//            userGenderList= asList("female");
//            policiyy=recommendationsServ.getByGender(userGenderList);
//            System.out.println(policiyy);
//        }
//        else if(userGender.equals("both"))
//        {
//            userGenderList= asList("male", "female");
//            policiyy=recommendationsServ.getByGender(userGenderList);
//            System.out.println(policiyy);
//        }
//        System.out.println("end: "+policiyy);
//        return policiyy;
//    }
//    @GetMapping("policyByDisease/{policyDisease}")
//    public  List<Policy> getByDisease(@PathVariable("policyDisease") String policyDisease){
//        System.out.println("in controller");
//        List<String> policyDiseaseName= Arrays.asList(policyDisease);
//
//        List<Policy> policiyy=recommendationsServ.getByDisease(policyDiseaseName);
//        System.out.println(policiyy);
//        return policiyy;
//    }
//
//    @GetMapping("policyByAgeGender/{age}/{gender}")
//    public  List<Policy> getByAgeGender(@PathVariable("age")int age,@PathVariable("gender")String usergender){
//        System.out.println("in controller");
//
//        List<String> genderList= Arrays.asList(usergender);
//        List<Policy> policiyy=recommendationsServ.getByAgeGender(age,genderList);
//        kafkaTemplate.send("ageGenderPolicy", policiyy);
//        System.out.println(policiyy);
//        return policiyy;
//    }
//
//
//
//
//    @GetMapping("policyByAgeDisease/{age}/{policyDisease}")
//    public  List<Policy> getByAgeDisease(@PathVariable("age")int age,@PathVariable("policyDisease")String policyDisease){
//        System.out.println("in controller");
//
//        List<String> diseaseList= Arrays.asList(policyDisease);
//        List<Policy> policiyy=recommendationsServ.getByAgeDisease(age,diseaseList);
//        System.out.println(policiyy);
//        return policiyy;
//    }
//
//
//    @GetMapping("policyByGenderDisease/{usergender}/{policyDisease}")
//    public  List<Policy> getByAgeDisease(@PathVariable("usergender")String usergender,@PathVariable("policyDisease")String policyDisease){
//        System.out.println("in controller");
//        List<String> genderList= Arrays.asList(usergender);
//
//        List<String> diseaseList= Arrays.asList(policyDisease);
//        List<Policy> policiyy=recommendationsServ.getByGenderDisease(genderList,diseaseList);
//        System.out.println(policiyy);
//        return policiyy;
//    }

    @GetMapping("user/{username}")
    public Insured geUser(@PathVariable("username")String username){
        System.out.println("in controller");
        Insured user=recommendationsServ.findUser(username);
        System.out.println(user);
        return user;
    }

    @GetMapping("policyByAgeGender/{username}")
    public  List<Policy> getByAgeGender(@PathVariable("username")String username){
        System.out.println("in controller");


        List<Policy> policiyy=recommendationsServ.getByAgeGender(username);
        kafkaTemplate.send("ageGenderPolicy", policiyy);
        System.out.println(policiyy);
        return policiyy;
    }

//
//
//
}
