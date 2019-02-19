package com.stackroute.pie.repository;

import com.stackroute.pie.domain.*;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.nio.file.LinkOption;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface RecommendationsRepo extends Neo4jRepository<Recommendation,Long> {


    @Query("CREATE (Insurer:insurer{insurerLicense:{insurerLicense},insurerName:{insurerName}})")
    Insurer newInsurer(@Param("insurerId")Long insurerId, @Param("insurerName")String insurerName, @Param("insurerLicense")String insurerLicense);

    @Query("CREATE (Policy:policy{maxAge:{maxAge},minAge:{minAge},policyId:{policyId},policyName:{policyName},insurerName:{insurerName}})")
    Policy newPolicy(@Param("policyId")int policyId,@Param("insurerName")String insurerName, @Param("policyName")String policyName, @Param("minAge")int minAge, @Param("maxAge")int maxAge);

    @Query("CREATE (Insured:insured1{insuredId:{insuredId},username:{username},gender:{gender}})")
    Insured newInsured( @Param("insuredId")int insuredId,@Param("username")String username, @Param("gender")String gender);

    @Query("MATCH (n:insurer{insurerLicense:{insurerLicense}}) SET n.insurerName={insurerName} ")
    Insurer updateInsurer(@Param("insurerId")Long insurerId,@Param("insurerName")String insurerName,@Param("insurerLicense")String insurerLicense);


    @Query("MATCH (p:policy{policyId:{policyId}})  SET p.maxAge={maxAge} SET p.minAge={minAge} SET p.policyName={policyName} ")
    Policy updatePolicy(@Param("policyId")int policyId, @Param("policyName")String policyName, @Param("minAge")int minAge, @Param("maxAge")int maxAge);

    @Query("MATCH (u:insured1{insuredId:{insuredId}}) SET u.username={username}")
    Insured updateInsured(@Param("insuredId") int insuredId, @Param("username")String username, @Param("gender")String gender);

    @Query("MATCH (Insurer:insurer{insurerName:{insurerName}}),(Policy:policy{policyId:{policyId}})  CREATE (Policy)-[:POLICY_OF]->(Insurer)")
    void insurerPolicy(@Param("insurerName") String insurerName,@Param("policyId") int policyId);

    @Query("MATCH (Policy:policy{policyId:{policyId}}),(Insured:insured1{insuredId:{insuredId}}) CREATE (Insured)-[:HAS_A_POLICY]->(Policy)")
    void insuredPolicy(@Param("policyId") int policyId,@Param("insuredId")int insuredId);

    @Query("MATCH (Policy:policy{policyId:{policyId}}),(Insured:insured{insuredId:{insuredId}}) CREATE (Insured)-[:VIEWED_POLICY]->(Policy)")
    void viewedPolicy(@Param("policyId") int policyId,@Param("insuredId")int insuredId);

    @Query("MATCH p= (insured)-[r: VIEWED_POLICY]->(policy) RETURN policy")
    List<Policy> findViewedPolicy();


    @Query("match  p = (insured)-[:VIEWED_POLICY]->(policy) where insured.username starts with $username return policy")
    List<Policy> findByuserName(String username);

    @Query("match  p = (insured)-[:HAS_A_POLICY]->(policy) where policy.maxAge>$age AND policy.minAge<$age  return policy")
    List<Policy> findByAge(Integer age);

    @Query("MATCH p= (policy)-[r: POLICY_OF]->(insurer)  where policy.gender=$userGender RETURN policy")
    List<Policy> findByGender(List<String> userGender);

    @Query("MATCH p= (policy)-[r: POLICY_OF]->(insurer)  where policy.diseasesList=$policyDisease RETURN policy")
    List<Policy> findByDisease(List<String> policyDisease);
}
