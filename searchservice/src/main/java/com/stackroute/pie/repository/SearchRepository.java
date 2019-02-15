package com.stackroute.pie.repository;

import com.stackroute.pie.domain.Diseases;
import com.stackroute.pie.domain.Policy;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface SearchRepository extends MongoRepository<Policy, Integer> {
    List<Policy> findByPolicyName(String policyName);

    List<Policy> findByDiseasesListDiseaseName(String diseaseName);

    List<Policy> findByInsurerName(String insurerName);

    List<Policy> findBySumInsured(int sumInsured);
}
//    @Query("{'age' : { $gte: minAge, $lte: ?maxAge } }")
//    @Query("{age: ?0}, {minAge:?0, maxAge:?1}")
//    List<Policy> findByAgeBetween(int age);

