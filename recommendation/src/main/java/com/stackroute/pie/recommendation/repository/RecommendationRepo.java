package com.stackroute.pie.recommendation.repository;

import com.stackroute.pie.recommendation.domain.policy;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;

import java.util.List;

public interface RecommendationRepo extends Neo4jRepository <policy,Integer>{

   //@Query("match  p = (insured)-[:HAS_VIEWED]->(policy) return policy")
    //@Query("match  p = (user)-[:SUFFERING_FROM]->(disease)-[:HAS_A_POLICY]-(policy) return policy")
    //@Query("match  p = (user)-[:SUFFERING_FROM]->(disease)-[:HAS_A_POLICY]-(policy) where policy.minAge=35  return policy")
@Query("MATCH p= (policy)-[r: POLICY_OF]->(insurer) RETURN policy")
    List<policy> findAllPolicy();


    @Query("match  p = (insured)-[:HAS_VIEWED]->(policy) where insured.userName starts with $userName return policy")
    List<policy> findByuserName(String userName);


}
