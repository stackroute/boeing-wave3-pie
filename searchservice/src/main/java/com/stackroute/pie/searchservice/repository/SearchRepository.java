package com.stackroute.pie.searchservice.repository;

import com.stackroute.pie.searchservice.domain.Policy;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface SearchRepository extends MongoRepository<Policy, Integer> {
     List<Policy> findByPolicyName(String policyName);
}
