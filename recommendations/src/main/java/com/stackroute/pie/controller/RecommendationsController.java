package com.stackroute.pie.controller;

import com.stackroute.pie.domain.FamilyMembers;
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
@RequestMapping("rest/neo4j/recommendations/")
@CrossOrigin("*")
public class RecommendationsController {

    private KafkaTemplate<String, List<Policy>> kafkaTemplate;
    private RecommendationsServImpl recommendationsServ;
    @Autowired
    public RecommendationsController(KafkaTemplate<String, List<Policy>> kafkaTemplate, RecommendationsServImpl recommendationsServ){
        this.kafkaTemplate = kafkaTemplate;
        this.recommendationsServ = recommendationsServ;
    }


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

    @PostMapping("members")
    public ResponseEntity<?> saveMember(@RequestBody FamilyMembers familyMembers){
        ResponseEntity responseEntity;
        FamilyMembers familyMembers1=recommendationsServ.createMembers(familyMembers);
        responseEntity= new ResponseEntity<FamilyMembers>(familyMembers1, HttpStatus.CREATED);
        System.out.println((familyMembers1));
        return responseEntity;
    }


    @DeleteMapping("insurerDelete")
    public ResponseEntity<?> deleteInsurer(@RequestBody Insurer insurer){
        ResponseEntity responseEntity;
        Insurer Insurer1=recommendationsServ.deleteInsurer(insurer);
        responseEntity= new ResponseEntity<Insurer>(Insurer1, HttpStatus.ACCEPTED);
        System.out.println((Insurer1));
        return responseEntity;
    }

    @DeleteMapping("policyDelete")
    public ResponseEntity<?> deletePolicy(@RequestBody Policy policy){
        ResponseEntity responseEntity;
        Policy policy1=recommendationsServ.deletePolicy(policy);
        responseEntity= new ResponseEntity<Policy>(policy1, HttpStatus.ACCEPTED);
        return responseEntity;
    }

    @DeleteMapping("insuredDelete")
    public ResponseEntity<?> deleteInsured(@RequestBody Insured insured){
        ResponseEntity responseEntity;
        Insured insured1=recommendationsServ.deleteInsured(insured);
        responseEntity= new ResponseEntity<Insured>(insured1, HttpStatus.ACCEPTED);
        return responseEntity;
    }






    @PostMapping(value = "relationship/{insurerName}/{policyId}")
    public ResponseEntity<?> linkpolicy(@PathVariable String insurerName,@PathVariable int policyId){
        ResponseEntity responseEntity;
        responseEntity= new ResponseEntity<String>(recommendationsServ.insurerPolicy(insurerName,policyId),HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping(value = "relation/{policyId}/{username}")
    public ResponseEntity<?> linkinsured(@PathVariable int policyId,@PathVariable String username){
        ResponseEntity responseEntity;
        responseEntity= new ResponseEntity<String>(recommendationsServ.insuredPolicy(policyId,username),HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping(value = "view/{policyId}/{username}")
    public ResponseEntity<?> viewPolicy(@PathVariable int policyId,@PathVariable String username){
        ResponseEntity responseEntity;
        responseEntity= new ResponseEntity<String>(recommendationsServ.viewPolicy(policyId,username),HttpStatus.CREATED);
        return responseEntity;
    }

    @PostMapping(value = "dependants/{memberName}/{username}")
    public ResponseEntity<?> linkDependants(@PathVariable String memberName,@PathVariable String username){
        ResponseEntity responseEntity;
        responseEntity= new ResponseEntity<String>(recommendationsServ.linkDependants(memberName,username),HttpStatus.CREATED);
        return responseEntity;
    }

    @GetMapping("policies")
    public List<Policy> getAll(){
        List<Policy> policyList=recommendationsServ.displayPolicy();
        return policyList;
    }

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
    @GetMapping("policyByAge/{username}")
    public  List<Policy> getByAge(@PathVariable("username")String username){
        System.out.println("in controller");
        List<Policy> policiyy=recommendationsServ.getByAge(username);
        //kafkaTemplate.send("ageGenderPolicy", policiyy);
        System.out.println(policiyy);
        return policiyy;
    }

    @GetMapping("policyByGender/{username}")
    public  List<Policy> getByGender(@PathVariable("username")String username){
        System.out.println("in controller");
        List<Policy> policiyy=recommendationsServ.getByGender(username);
        //kafkaTemplate.send("ageGenderPolicy", policiyy);
        System.out.println(policiyy);
        return policiyy;
    }

    @GetMapping("policyByDisease/{username}")
    public  List<Policy> getByDisease(@PathVariable("username")String username){
        System.out.println("in controller");
        List<Policy> policiyy=recommendationsServ.getByDisease(username);
        //kafkaTemplate.send("ageGenderPolicy", policiyy);
        System.out.println(policiyy);
        return policiyy;
    }


    @GetMapping("policyByAgeGenderDisease/{username}")
    public  List<Policy> getByAgeGenderDisease(@PathVariable("username")String username){
        System.out.println("in controller");
        List<Policy> policiyy=recommendationsServ.getByAgeGenderDisease(username);

        System.out.println(policiyy);
        return policiyy;
    }

    @GetMapping("policyForDependants/{username}")
    public  List<Policy> getForDependants(@PathVariable("username")String username){
        System.out.println("in controller");
        List<Policy> policiyy=recommendationsServ.policyForDependants(username);

        System.out.println(policiyy);
        return policiyy;
    }
}
