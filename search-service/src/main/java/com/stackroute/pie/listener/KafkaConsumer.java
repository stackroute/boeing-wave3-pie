package com.stackroute.pie.listener;

import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.repository.SearchRepository;
import com.stackroute.pie.service.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
@Service
public class KafkaConsumer {

        @Autowired
        SearchRepository searchRepository;

        @Autowired
        SearchServiceImpl searchService;


//    @KafkaListener(topics = "Kafka_Example_json", groupId = "group_json",
//            containerFactory = "userKafkaListenerFactory")

        //consuming data from kafka & setting it to commonauth
        @KafkaListener(topics = "insurer_only_policy_json", groupId = "group_json", containerFactory = "userKafkaListenerFactory")
        public void consumeJson(Policy policy) {
            System.out.println("yoyoyoyoyo");
            System.out.println("Consumed JSON Message: " + policy);
            searchRepository.save(policy);
            System.out.println("Saved Policy" +policy.getPolicyId());


        }


    }








