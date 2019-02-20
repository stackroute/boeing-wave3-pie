package com.stackroute.pie.service;

import com.stackroute.pie.domain.Disease;
import com.stackroute.pie.domain.Insured;
import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;

import java.util.List;

public interface RecommendationServ {
    public Insurer createInsurer(Insurer insurer);
    public Policy createPolicy(Policy policy);
    public Insured createInsured(Insured insured);
    public  Insurer updateInsurer(Insurer insurer);
    public  Policy updatePolicy(Policy policy);
    public Insured updateInsured(Insured insured);
    public String insurerPolicy(String insurerName,int policyId);
    public String insuredPolicy(int policyId,String username);
    public String viewPolicy(int policyId,String username);
    public Disease createDisease(Disease disease);
    List<Policy> displayPolicy();
    List<Policy> getByUserName(String username);
    List<Policy> getByAge(Integer age);
    List<Policy> getByGender(List<String> userGender);
    List<Policy> getByDisease(List<String> policyDisease);
    List<Policy> getByAgeGender(int age,List<String>userGender);
    List<Policy> getByAgeDisease(int age,List<String>policyDisease);
    List<Policy> getByGenderDisease(List<String>userGender,List<String>policyDisease);




}
