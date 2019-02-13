package com.stackroute.pie.recommendation.service;

import com.stackroute.pie.recommendation.domain.insured;
import com.stackroute.pie.recommendation.domain.insurer;
import com.stackroute.pie.recommendation.domain.policy;

import java.util.List;

public interface RecommendationService {
    List<policy> displayPolicy();
    List<policy> getByUserName(String userName);
    List<policy> getByAge(Integer userAge);
    List<policy> getByGender(List<String> userGender);
    List<policy> getByDisease(List<String> policyDisease);
    public insurer createInsurer(insurer Insurer);
    public policy createPolicy(policy Policy);
    public insured createInsurer(insured Insured);

}
