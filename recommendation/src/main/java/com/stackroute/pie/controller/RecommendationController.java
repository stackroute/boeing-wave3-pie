package com.stackroute.pie.controller;


import com.stackroute.pie.domain.insured;
import com.stackroute.pie.domain.insurer;
import com.stackroute.pie.domain.policy;
import com.stackroute.pie.service.RecommendationServiceImpl;
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
    System.out.println((Insurer1));
        return responseEntity;
    }

@PostMapping("policy")
    public  ResponseEntity<?> savePolicy(@RequestBody policy Policy){
        ResponseEntity responseEntity;
        policy Policy1=recommendationService.createPolicy(Policy);
        responseEntity=new ResponseEntity<policy>(Policy1,HttpStatus.CREATED);
    System.out.println(Policy1);
        return responseEntity;

}

@PostMapping("insured")
    public ResponseEntity<?> saveInsured(@RequestBody insured Insured){
        ResponseEntity responseEntity;
        insured Insured1=recommendationService.createInsured(Insured);
        responseEntity=new ResponseEntity<insured>(Insured1,HttpStatus.CREATED);
        return responseEntity;


}

@PutMapping("updateInsurer")
public ResponseEntity<?> updateInsurer(@RequestBody insurer Insurer){
        ResponseEntity responseEntity;
        insurer Insurer1=recommendationService.updateInsurer(Insurer);
        responseEntity=new ResponseEntity<insurer>(Insurer1,HttpStatus.ACCEPTED);
        return responseEntity;
}

@PutMapping("updatePolicy")
    public ResponseEntity<?> updatePolicy(@RequestBody policy Policy){
        ResponseEntity responseEntity;
        policy Policy1=recommendationService.updatePolicy(Policy);
        responseEntity=new ResponseEntity<policy>(Policy1,HttpStatus.ACCEPTED);
        return responseEntity;

}

@PutMapping("updateInsured")
public ResponseEntity<?> updateInsured(@RequestBody insured Insurer){
        ResponseEntity responseEntity;
        insured Insured1=recommendationService.updateInsured(Insurer);
        responseEntity=new ResponseEntity<insured>(Insured1,HttpStatus.ACCEPTED);
        return responseEntity;
}

@DeleteMapping("deleteInsurer")
public ResponseEntity<?> deleteInsurer(@RequestBody insurer Insurer){
        ResponseEntity responseEntity;
        insurer Insurer1=recommendationService.deleteInsurer(Insurer);
        responseEntity=new ResponseEntity<insurer>(Insurer1,HttpStatus.ACCEPTED);
        return responseEntity;
}

@DeleteMapping("deletePolicy")
public ResponseEntity<?> deletePolicy(@RequestBody policy Policy){
        ResponseEntity responseEntity;
        policy Policy1=recommendationService.deletePolicy(Policy);
        responseEntity=new ResponseEntity<policy>(Policy1,HttpStatus.ACCEPTED);
        return responseEntity;
}

@DeleteMapping("deleteInsured")
    public ResponseEntity<?> deleteInsured(@RequestBody insured Insured){
        ResponseEntity responseEntity;
        insured Insured1=recommendationService.deleteInsured(Insured);
        responseEntity=new ResponseEntity<insured>(Insured1,HttpStatus.ACCEPTED);
        return responseEntity;
}

@PostMapping(value = "relationship/{insurerLicense}/{policyId}")
public ResponseEntity<?> linkpolicy(@PathVariable String insurerLicense,@PathVariable int policyId){
        ResponseEntity responseEntity;
        responseEntity= new ResponseEntity<String>(recommendationService.link(insurerLicense,policyId),HttpStatus.OK);
        return responseEntity;
}

@PostMapping(value = "relation/{policyId}/{userId}")
    public ResponseEntity<?> hasPolicy(@PathVariable int policyId, @PathVariable int userId){

        ResponseEntity responseEntity;
        responseEntity=new ResponseEntity<String>(recommendationService.hasPolicy(policyId,userId),HttpStatus.OK);
        return responseEntity;
}
}
