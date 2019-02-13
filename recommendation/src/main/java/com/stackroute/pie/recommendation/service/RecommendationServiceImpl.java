package com.stackroute.pie.recommendation.service;

import com.stackroute.pie.recommendation.domain.insured;
import com.stackroute.pie.recommendation.domain.insurer;
import com.stackroute.pie.recommendation.domain.policy;
import com.stackroute.pie.recommendation.repository.RecommendationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendationServiceImpl implements RecommendationService {

    @Autowired
    private RecommendationRepo recommendationRepo;
    @Override
    public List<policy> displayPolicy() {
        return recommendationRepo.findAllPolicy();
    }

    @Override
    public List<policy> getByUserName(String userName) {
        List<policy> policyList=recommendationRepo.findByuserName(userName);
        return  policyList;
    }

    @Override
    public List<policy> getByAge(Integer userAge) {
        List<policy> policyList=recommendationRepo.findByAge(userAge);
        return  policyList;
    }

    @Override
    public List<policy> getByGender(List<String> userGender) {
        List<policy> policyList=recommendationRepo.findByGender(userGender);
        return  policyList;
    }

    @Override
    public List<policy> getByDisease(List<String> policyDisease) {
        List<policy> policyList=recommendationRepo.findByDisease(policyDisease);
        return  policyList;
    }

    @Override
    public insurer createInsurer(insurer Insurer) {
        return recommendationRepo.saveInsurer(Insurer.getInsurerId(),Insurer.getInsurerName(),Insurer.getInsurerLicense(),
                Insurer.getInsurerEmail(),Insurer.getPassword(),Insurer.getInsurerAddress(),Insurer.getSecurityQuestion(),Insurer.getSecurityAnswer());
    }

    @Override
    public policy createPolicy(policy Policy) {
        return recommendationRepo.savePolicy(Policy.getPolicyId(),Policy.getPolicyName(),Policy.getPolicyType(),Policy.getDiseasesList(),Policy.getCashlessHospitals(),Policy.getWaitingPeriod(),Policy.getMonthlyPremium(),Policy.getYearlyPremium(),Policy.getSumInsured(),Policy.getMinAge(),Policy.getMaxAge(),Policy.getLocation(),Policy.getCreatedBy(),Policy.getUpdatedBy(),Policy.getGender());

    }

    @Override
    public insured createInsurer(insured Insured) {
        return recommendationRepo.saveInsured(Insured.getUserId(),Insured.getUserName(),Insured.getGender(),Insured.getPhoneNumber(),Insured.getEmailId(),Insured.getAddress(),Insured.getName(),Insured.getAge(),Insured.getRemainingWaitingPeriod(),Insured.getFamilyMembers());
    }
}


