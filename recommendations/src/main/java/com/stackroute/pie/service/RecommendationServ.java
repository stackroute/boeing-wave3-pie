package com.stackroute.pie.service;

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
    public String insuredPolicy(int policyId,int insuredId);
    public String viewPolicy(int policyId,int insurerId);
        List<Policy> displayPolicy();
        List<Policy> getByUserName(String userName);
        List<Policy> getByAge(Integer age);
        List<Policy> getByGender(List<String> userGender);
        List<Policy> getByDisease(List<String> policyDisease);




}
