package com.stackroute.pie.listener;

import com.stackroute.pie.model.Insurer;
import com.stackroute.pie.model.Role;
import com.stackroute.pie.repository.InsurerRepository;
import com.stackroute.pie.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

import static com.stackroute.pie.model.RoleName.ROLE_INSURER;

@Service
public class KafkaConsumer {
    @Autowired
    InsurerRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @KafkaListener(topics = "deepak", groupId = "group_id")
    public void consume(String message) {
        System.out.println("String wala method");
        System.out.println("Consumed message1: " + message);
    }
    //    @KafkaListener(topics = "Kafka_Example_json", group = "group_json",
//            containerFactory = "userKafkaListenerFactory")
    @KafkaListener(topics = "company_1_json", groupId = "group_json", containerFactory = "userKafkaListenerFactory")
    public void consumeJson(Insurer user) {
        System.out.println("yoyoyoyoyo");
        System.out.println("Consumed JSON Message: " + user);
        Set<Role> roles = new HashSet<>();


        Role insurerRole = roleRepository.findByName(ROLE_INSURER)
                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
        roles.add(insurerRole);
        user.setRoles(roles);
        userRepository.save(user);


    }
}
