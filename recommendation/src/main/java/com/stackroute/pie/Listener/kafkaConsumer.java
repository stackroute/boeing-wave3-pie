package com.stackroute.pie.Listener;


import com.stackroute.pie.domain.insured;
import com.stackroute.pie.domain.insurer;
import com.stackroute.pie.domain.policy;
import com.stackroute.pie.repository.RecommendationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.security.Policy;

@Service
public class kafkaConsumer {
    @Autowired
    private RecommendationRepo recommendationRepo;
    @KafkaListener(topics = "deepak", groupId = "group_id")
    public void consume(String message) {
        System.out.println("String wala method");
        System.out.println("Consumed message1: " + message);
    }
    //insurer
    @KafkaListener(topics = "insurer_2_json", groupId = "group_json", containerFactory = "userKafkaListenerFactory")
    public void consumeJson(insurer Insurer) {
        System.out.println("yoyoyoyoyo");
        System.out.println("Consumed JSON Message: " + Insurer);
        recommendationRepo.saveInsurer(Insurer.getInsurerId(),Insurer.getInsurerName(),Insurer.getInsurerLicense(),Insurer.getInsurerEmail(),Insurer.getPassword(),Insurer.getInsurerAddress(),Insurer.getSecurityQuestion(),Insurer.getSecurityAnswer());
    }
    //policy
    @KafkaListener(topics = "insurer_policy_json", groupId = "group_json", containerFactory = "userKafkaListenerFactory")
    public void consumeJson(policy Policy) {
        System.out.println("yoyoyoyoyo");
        System.out.println("Consumed JSON Message: " + Policy);
        recommendationRepo.savePolicy(Policy.getPolicyId(),Policy.getPolicyName(),Policy.getGender(),Policy.getPolicyType(),Policy.getDiseasesList(),Policy.getCashlessHospitals(),Policy.getWaitingPeriod(),Policy.getMonthlyPremium(),Policy.getYearlyPremium(),Policy.getSumInsured(),Policy.getMinAge(),Policy.getMaxAge(),Policy.getLocation(),Policy.getCreatedBy(),Policy.getUpdatedBy());
    }
    //insured
    @KafkaListener(topics = "userreg_json", groupId = "group_json", containerFactory = "userKafkaListenerFactory")
    public void consumeJson(insured Insured) {
        System.out.println("yoyoyoyoyo");
        System.out.println("Consumed JSON Message: " + Insured);
        recommendationRepo.saveInsured(Insured.getUserId(),Insured.getUserName(),Insured.getGender(),Insured.getPhoneNumber(),Insured.getEmailId(),Insured.getAddress(),Insured.getName(),Insured.getAge(),Insured.getRemainingWaitingPeriod(),Insured.getFamilyMembers());
    }


}
