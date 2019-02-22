package com.stackroute.pie.repository;

import com.stackroute.pie.domain.*;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface RecommendationsRepo extends Neo4jRepository<Insured,Long> {

    @Query("CREATE (insurer:Insurer{insurerLicense:{insurerLicense},insurerName:{insurerName}})")
    Insurer newInsurer(@Param("insurerId")Long insurerId, @Param("insurerName")String insurerName, @Param("insurerLicense")String insurerLicense);

    @Query("CREATE (policy:Policy{maxAge:{maxAge},minAge:{minAge},policyId:{policyId},policyName:{policyName},policyInsurerName:{policyInsurerName},gender:[value in {gender} | toString(value)],diseasesCovered:[value in {diseasesCovered} | toString(value)],policyType:[value in {policyType} | toString(value)]})")
    Policy newPolicy(@Param("policyId")int policyId, @Param("policyInsurerName")String insurerName, @Param("policyName")String policyName, @Param("minAge")int minAge, @Param("maxAge")int maxAge, @Param("gender")List<String> gender, @Param("diseasesCovered")List<String> diseasesCovered, @Param("policyType")List<String> policyType);

    @Query("CREATE (insured:Insured{insuredId:{insuredId},username:{username},gender:{gender},age:{age}})")
    Insured newInsured(@Param("insuredId")int insuredId,@Param("username")String username, @Param("gender")String gender,@Param("age")int age);

    @Query("MATCH (policy:Policy) WHERE NOT ((policy)-[:IS_POLICY_OF]->()) WITH (policy) MATCH(insurer:Insurer) WHERE policy.policyInsurerName = insurer.insurerName CREATE (policy)-[:IS_POLICY_OF]->(insurer)")
    void insurerPolicy(@Param("insurerName") String insurerName,@Param("policyId") int policyId);

    @Query("MATCH (policy:Policy{policyId:{policyId}}),(insured:Insured{username:{username}}) CREATE (insured)-[:HAS_A_POLICY_IN]->(policy)")
    void insuredPolicy(@Param("policyId") int policyId,@Param("username")String username);

    @Query("MATCH (policy:Policy{policyId:{policyId}}),(insured:Insured{username:{username}}) CREATE (insured)-[:VIEWED_POLICY]->(policy)")
    void viewedPolicy(@Param("policyId") int policyId,@Param("username")String username);

    @Query("MATCH p= (insured)-[r:VIEWED_POLICY]->(policy) RETURN policy")
    List<Policy> findViewedPolicy();

    @Query("match  p = (insured)-[:HAS_A_POLICY_IN]->(policy) where insured.username starts with $username return policy")
    List<Policy> findByuserName(String username);


   @Query("match  p = (policy:Policy) where policy.maxAge>$age AND policy.minAge<$age return policy")
   List<Policy> findByAge(@Param("age")int age);

    @Query("MATCH p= (policy:Policy)  where policy.gender=$userGender RETURN policy")
    List<Policy> findByGender(List<String> userGender);

    @Query("MATCH p= (policy:Policy)  where policy.diseasesCovered=$policyDisease RETURN policy")
    List<Policy> findByDisease(List<String> policyDisease);

    @Query("MATCH  p = (policy:Policy) WHERE (policy.maxAge>$age AND policy.minAge<$age) AND (policy.gender=$userGender) RETURN policy" )
    List<Policy> findByAgeGender(Integer age,List<String> userGender);


    @Query("MATCH  p = (policy:Policy) WHERE (policy.maxAge>$age AND policy.minAge<$age) AND (policy.diseasesCovered=$policyDisease) RETURN policy")
    List<Policy> findByAgeDisease(Integer age,List<String> policyDisease);

    @Query("MATCH  p = (policy:Policy) WHERE (policy.gender=$userGender) AND (policy.diseasesCovered=$policyDisease) RETURN policy")
    List<Policy> findByGenderDisease(List<String>userGender,List<String>policyDisease);

  




}
