//package com.stackroute.pie.repository;
//
//import com.stackroute.pie.model.InsurerMongo;
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.Optional;
//
//@Repository
//public interface InsurerMongoRepository extends MongoRepository<InsurerMongo,Long> {
//    Optional<InsurerMongo> findByInsurerName(String insurerName);
//    Boolean existsByInsurerName(String insurerName);
//    Boolean existsByInsurerEmail(String insurerEmail);
//}