package com.stackroute.pie.listener;

import com.stackroute.pie.domain.FamilyMembers;
import com.stackroute.pie.domain.Insured;
import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.repository.RecommendationsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {


    @Autowired
    RecommendationsRepo recommendationsRepo;

    @KafkaListener(topics = "deepak", groupId = "group_id")
    public void consume(String message) {
        System.out.println("String wala method");
        System.out.println("Consumed message1: " + message);
    }
//    @KafkaListener(topics = "Kafka_Example_json", groupId = "group_json",
//            containerFactory = "userKafkaListenerFactory")

    //consuming data from kafka & setting it to commonauth
    @KafkaListener(topics = "userregg_json", groupId = "group_json", containerFactory = "insuredKafkaListenerFactory")
    public void consumeJson(Insured insured) {
        System.out.println("yoyoyoyoyo");
        System.out.println("Consumed JSON Message: " + insured);

        recommendationsRepo.newInsured(insured.getInsuredId(), insured.getUsername(), insured.getGender(), insured.getAge(), insured.getExistingDisease(), insured.getNumberOfDependants());


    }

    @KafkaListener(topics = "company_1_json", groupId = "group_json", containerFactory = "insurerKafkaListenerFactory")
    public void consumeJson(Insurer insurer) {
        System.out.println("yoyoyoyoyo");
        System.out.println("Consumed JSON Message: " + insurer);
        recommendationsRepo.newInsurer(insurer.getInsurerId(), insurer.getInsurerName(), insurer.getInsurerLicense());
        //recommendationsRepo.newInsured(insurer.getInsuredId(),insured.getUsername(),insured.getGender(),insured.getAge(),insured.getExistingDisease(),insured.getFamilyMembers());


    }

    @KafkaListener(topics = "insurer_policy_json", groupId = "group_json", containerFactory = "policyKafkaListenerFactory")
    public void consumeJson1(Insurer insurer) {
        System.out.println("yoyoyoyoyo");
        System.out.println("Consumed JSON Message: " + insurer);
        for (Policy policy : insurer.getPolicies()) {
            recommendationsRepo.newPolicy(policy.getPolicyId(), policy.getInsurerName(), policy.getPolicyName(), policy.getMinAge(), policy.getMaxAge(), policy.getGender(), policy.getDiseases(), policy.getPolicyType());
            System.out.println(insurer.getInsurerName());
            recommendationsRepo.insurerPolicy(insurer.getInsurerName(), policy.getPolicyId());
        }
    }


    @KafkaListener(topics = "family_json", groupId = "group_json", containerFactory = "familyKafkaListenerFactory")
    public void consumeJson2(Insured insured) {
        System.out.println("yoyoyoyoyo");
        System.out.println("Consumed JSON Message: " + insured);
        for (FamilyMembers familyMembers1: insured.getFamilyMembers()) {
            recommendationsRepo.newFamilyMembers(familyMembers1.getUsername(), familyMembers1.getMemberName(), familyMembers1.getMemberAge(), familyMembers1.getRelation(), familyMembers1.getMemberGender());
            recommendationsRepo.addDependant(familyMembers1.getMemberName(), insured.getUsername());
        }
    }
}








