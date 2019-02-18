package com.stackroute.pie.recommendation.controller;

import com.stackroute.pie.recommendation.domain.policy;
import com.stackroute.pie.recommendation.service.RecommendationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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




}
