package com.stackroute.pie.service;

import com.stackroute.pie.domain.insured;
import com.stackroute.pie.domain.insurer;
import com.stackroute.pie.domain.policy;
import com.stackroute.pie.repository.RecommendationRepo;
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
    public policy createPolicy(policy policy1) {
//        policy policy3=recommendationRepo.savePolicy(policy1);
        policy policy2 =  recommendationRepo.savePolicy(policy1.getPolicyId(),policy1.getPolicyName(),policy1.getGender(),policy1.getPolicyType(),policy1.getDiseasesList(),policy1.getCashlessHospitals(),policy1.getWaitingPeriod(),policy1.getMonthlyPremium(),policy1.getYearlyPremium(),policy1.getSumInsured(),policy1.getMinAge(),policy1.getMaxAge(),policy1.getLocation(),policy1.getCreatedBy(),policy1.getUpdatedBy());
        return policy2;
    }

    @Override
    public insured createInsured(insured Insured) {
        return recommendationRepo.saveInsured(Insured.getUserId(),Insured.getUserName(),Insured.getGender(),Insured.getPhoneNumber(),Insured.getEmailId(),Insured.getAddress(),Insured.getName(),Insured.getAge(),Insured.getRemainingWaitingPeriod(),Insured.getFamilyMembers());
    }

    @Override
    public insurer updateInsurer(insurer Insurer) {
        return  recommendationRepo.updateInsurer(Insurer.getInsurerId(),Insurer.getInsurerName(),Insurer.getInsurerLicense(),Insurer.getInsurerEmail(),Insurer.getPassword(),Insurer.getInsurerAddress(),Insurer.getSecurityQuestion(),Insurer.getSecurityAnswer());
    }

    @Override
    public policy updatePolicy(policy Policy) {
        return recommendationRepo.updatePolicy(Policy.getPolicyId(),Policy.getPolicyName(),Policy.getGender(),Policy.getPolicyType(),Policy.getDiseasesList(),Policy.getCashlessHospitals(),Policy.getWaitingPeriod(),Policy.getMonthlyPremium(),Policy.getYearlyPremium(),Policy.getSumInsured(),Policy.getMinAge(),Policy.getMaxAge(),Policy.getLocation(),Policy.getCreatedBy(),Policy.getUpdatedBy());
    }

    @Override
    public insured updateInsured(insured Insured) {
        return  recommendationRepo.updateInsured(Insured.getUserId(),Insured.getUserName(),Insured.getGender(),Insured.getPhoneNumber(),Insured.getEmailId(),Insured.getAddress(),Insured.getName(),Insured.getAge(),Insured.getRemainingWaitingPeriod(),Insured.getFamilyMembers());
    }

    @Override
    public insurer deleteInsurer(insurer Insurer) {
        return recommendationRepo.deleteInsurer(Insurer.getInsurerLicense());
    }

    @Override
    public policy deletePolicy(policy Policy) {
        return recommendationRepo.deletePolicy(Policy.getPolicyId());
    }

    @Override
    public insured deleteInsured(insured Insured) {
        return recommendationRepo.deleteInsured(Insured.getUserId());

    }

    @Override
    public String link(String insurerLicense, int policyId) {
        recommendationRepo.link(insurerLicense,policyId);
        return " ";
    }

    @Override
    public String hasPolicy(int policyId, int userId) {
        recommendationRepo.hasPolicy(policyId,userId);
        return  " ";
    }


}


