package com.stackroute.pie.service;

import com.stackroute.pie.domain.Disease;
import com.stackroute.pie.domain.Insured;
import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface RecommendationServ {
     Insurer createInsurer(Insurer insurer);
     Policy createPolicy(Policy policy);
     Insured createInsured(Insured insured);
     String insurerPolicy(String insurerName,int policyId);
     String insuredPolicy(int policyId,String username);
     String viewPolicy(int policyId,String username);
    List<Policy> displayPolicy();
    List<Policy> getByUserName(String username);
   // List<Policy> getByAge(int age);
    List<Policy> getByGender(String userGender);
    List<Policy> getByDisease(List<String> policyDisease);
  List<Policy> getByAgeGender(String username);
    List<Policy> getByAgeDisease(int age,List<String>policyDisease);
    List<Policy> getByGenderDisease(String userGender,List<String>policyDisease);

   List<Policy> getPolicy(int age,String gender);
     Insured findUser(String username);

}
