//package com.stackroute.pie.configuration;
//
//
//
//import com.fasterxml.jackson.databind.JsonSerializer;
//import com.fasterxml.jackson.databind.deser.std.StringDeserializer;
//import com.fasterxml.jackson.databind.ser.std.StringSerializer;
//import com.stackroute.pie.domain.Insured;
//import com.stackroute.pie.domain.Insurer;
//import com.stackroute.pie.domain.Policy;
//import org.apache.kafka.clients.consumer.ConsumerConfig;
//import org.apache.kafka.clients.producer.ProducerConfig;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.kafka.annotation.EnableKafka;
//import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
//import org.springframework.kafka.core.*;
//import org.springframework.kafka.support.serializer.JsonDeserializer;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//@EnableKafka
//@Configuration
//public class kafkaConfiguration {
//
////    @Bean
////    public ProducerFactory<String, List<Policy>> producerFactory() {
////        Map<String, Object> config = new HashMap<>();
////
////        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "13.126.73.190:9092");
////        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
////        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
////
////        return new DefaultKafkaProducerFactory<>(config);
////    }
////
////
////    @Bean
////    public KafkaTemplate<String, List<Policy>> kafkaTemplate() {
////        return new KafkaTemplate<>(producerFactory());
////    }
//
//    @Bean
//    public ConsumerFactory<String, String> consumerFactory() {
//        Map<String, Object> config = new HashMap<>();
//        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "13.126.73.190:9092");
//        config.put(ConsumerConfig.GROUP_ID_CONFIG, "group_id");
//        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
//        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
//        System.out.println("Inside consumer factory------------");
//        return new DefaultKafkaConsumerFactory<>(config);
//    }
//    @Bean
//    public ConcurrentKafkaListenerContainerFactory<String, String> kafkaListenerContainerFactory() {
//        ConcurrentKafkaListenerContainerFactory<String, String> factory = new ConcurrentKafkaListenerContainerFactory();
//        factory.setConsumerFactory(consumerFactory());
//        return factory;
//    }
//    @Bean
//    public ConsumerFactory<String, Insurer> userConsumerFactory() {
//        Map<String, Object> config = new HashMap<>();
//        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "13.126.73.190:9092");
//        config.put(ConsumerConfig.GROUP_ID_CONFIG, "group_json");
//        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
//        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
//        System.out.println("Inside consumer factory json------------");
//        return new DefaultKafkaConsumerFactory<>(config, new org.apache.kafka.common.serialization.StringDeserializer(),
//                new JsonDeserializer<>(Insurer.class));
//    }
//    @Bean
//    public ConcurrentKafkaListenerContainerFactory<String, Insurer> userKafkaListenerFactory() {
//        ConcurrentKafkaListenerContainerFactory<String, Insurer> factory = new ConcurrentKafkaListenerContainerFactory<>();
//        factory.setConsumerFactory(userConsumerFactory());
//        return factory;
//    }
//    @Bean
//    public ConsumerFactory<String, Insured> insuredConsumerFactory() {
//        Map<String, Object> config = new HashMap<>();
//        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "13.126.73.190:9092");
//        config.put(ConsumerConfig.GROUP_ID_CONFIG, "group_json");
//        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
//        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
//        System.out.println("Inside consumer factory json------------");
//        return new DefaultKafkaConsumerFactory<>(config, new org.apache.kafka.common.serialization.StringDeserializer(),
//                new JsonDeserializer<>(Insured.class));
//    }
//    @Bean
//    public ConcurrentKafkaListenerContainerFactory<String, Insured> insuredKafkaListenerFactory() {
//        ConcurrentKafkaListenerContainerFactory<String, Insured> factory = new ConcurrentKafkaListenerContainerFactory<>();
//        factory.setConsumerFactory(insuredConsumerFactory());
//        return factory;
//    }
//
////    @Bean
////    public ConsumerFactory<String, Policy> policyConsumerFactory() {
////        Map<String, Object> config = new HashMap<>();
////        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "13.126.73.190:9092");
////        config.put(ConsumerConfig.GROUP_ID_CONFIG, "group_json");
////        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
////        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
////        System.out.println("Inside consumer factory json Deepak YO------------");
////        return new DefaultKafkaConsumerFactory<>(config, new org.apache.kafka.common.serialization.StringDeserializer(),
////                new JsonDeserializer<>(Policy.class));
////
////    }
////    @Bean
////    public ConcurrentKafkaListenerContainerFactory<String, Policy> policyKafkaListenerFactory() {
////        ConcurrentKafkaListenerContainerFactory<String, Policy> factory = new ConcurrentKafkaListenerContainerFactory<>();
////        factory.setConsumerFactory(policyConsumerFactory());
////        System.out.println("in bro");
////        return factory;
////    }
//@Bean
//public ConsumerFactory<String, Insurer> policyConsumerFactory() {
//    Map<String, Object> config = new HashMap<>();
//    config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "13.126.73.190:9092");
//    config.put(ConsumerConfig.GROUP_ID_CONFIG, "group_json");
//    config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
//    config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
//    System.out.println("Inside consumer factory json------------");
//    return new DefaultKafkaConsumerFactory<>(config, new org.apache.kafka.common.serialization.StringDeserializer(),
//            new JsonDeserializer<>(Insurer.class));
//}
//    @Bean
//    public ConcurrentKafkaListenerContainerFactory<String, Insurer> policyKafkaListenerFactory() {
//        ConcurrentKafkaListenerContainerFactory<String, Insurer> factory = new ConcurrentKafkaListenerContainerFactory<>();
//        factory.setConsumerFactory(policyConsumerFactory());
//        return factory;
//    }
//
//}