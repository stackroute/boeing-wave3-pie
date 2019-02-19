//package com.stackroute.pie.listener;
//
//
//import com.stackroute.pie.domain.Insured;
//import com.stackroute.pie.domain.Insurer;
//import com.stackroute.pie.domain.Policy;
//
//
//import com.stackroute.pie.repository.RecommendationsRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Service;
//
//
//
//@Service
//public class kafkaConsumer {
//    @Autowired
//    private RecommendationsRepo recommendationsRepo;
//    @KafkaListener(topics = "deepak", groupId = "group_id")
//    public void consume(String message) {
//        System.out.println("String wala method");
//        System.out.println("Consumed message1: " + message);
//    }
//    //insurer
//    @KafkaListener(topics = "insurer_2_json", groupId = "group_json", containerFactory = "userKafkaListenerFactory")
//    public void consumeJson(Insurer insurer) {
//        System.out.println("yoyoyoyoyo");
//        System.out.println("Consumed JSON Message: " + insurer);
//        recommendationsRepo.newInsurer(insurer.getInsurerId(),insurer.getInsurerName(),insurer.getInsurerLicense());
//
//    }
//
//    @KafkaListener(topics = "userregg_json", groupId = "group_json", containerFactory = "insuredKafkaListenerFactory")
//       public void consumeJson(Insured insured) {
//        System.out.println("yoyoyoyoyo");
//        System.out.println("Consumed JSON Message: " + insured);
//        recommendationsRepo.newInsured(insured.getInsuredId(),insured.getUsername(),insured.getGender());
//    }
//
//
//    @KafkaListener(topics = "insurer_policy_json", groupId = "group_json", containerFactory = "policyKafkaListenerFactory")
//    public void consumeJsonObject(Insurer insurer) {
//        System.out.println("yoyoyoyoyo");
//        System.out.println("Consumed JSON Message: " + insurer);
//        for(Policy policy: insurer.getPolicies()) {
//            recommendationsRepo.newPolicy(policy.getPolicyId(),policy.getInsurerName(),policy.getPolicyName(),policy.getMinAge(),policy.getMaxAge());
////           recommendationsRepo.insurerPolicy(insurer.getInsurerName(),policy.getPolicyId());
////            System.out.println(insurer.getInsurerName());
//        }
//    }
//
//
//}
