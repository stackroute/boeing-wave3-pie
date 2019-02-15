package com.stackroute.pie.service;

import com.stackroute.pie.domain.insured;
import com.stackroute.pie.domain.insurer;
import com.stackroute.pie.domain.policy;

import java.util.List;

public interface RecommendationService {
    List<policy> displayPolicy();
    List<policy> getByUserName(String userName);
    List<policy> getByAge(Integer userAge);
    List<policy> getByGender(List<String> userGender);
    List<policy> getByDisease(List<String> policyDisease);
    public insurer createInsurer(insurer Insurer);
    public policy createPolicy(policy Policy);
    public insured createInsured(insured Insured);
    public insurer updateInsurer(insurer Insurer);
    public policy updatePolicy(policy Policy);
    public insured updateInsured(insured Insured);
    public insurer deleteInsurer(insurer Insurer);
    public policy deletePolicy(policy Policy);
    public insured deleteInsured(insured Insured);
    public String link(String insurerLicense,int policyId);
    public String hasPolicy(int policyId,int userId);

}
