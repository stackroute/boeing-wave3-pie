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
    //To find the policy by policyname
    List<Policy> findByPolicyName(String policyName);

    //To find policies based on diseaseName
    List<Policy> findByDiseasesCovered(String diseaseName);

    //To find policies by InsurerName
    List<Policy> findByInsurerName(String insurerName);

    //To find policies by sumInsured
//    List<Policy> findBySumInsured(int sumInsured);
//}
}

