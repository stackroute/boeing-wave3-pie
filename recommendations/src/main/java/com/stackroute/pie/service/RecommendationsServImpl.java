package com.stackroute.pie.service;

import com.stackroute.pie.domain.Insured;
import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.repository.RecommendationsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jmx.export.naming.IdentityNamingStrategy;
import org.springframework.stereotype.Service;

import java.io.PipedOutputStream;
import java.util.List;

@Service
public class RecommendationsServImpl implements RecommendationServ {

    @Autowired
    private RecommendationsRepo recommendationsRepo;
    private Insurer insurer;
    private Policy policy;

    @Override
    public Insurer createInsurer(Insurer insurer) {
        return recommendationsRepo.newInsurer(insurer.getInsurerId(), insurer.getInsurerName(), insurer.getInsurerLicense());
    }

    @Override
    public Policy createPolicy(Policy policy) {
       // String license = policy.getInsurerName();
        //Insurer insurer1 = recommendationsRepo.findByInsurerLicense(license).get();
        return recommendationsRepo.newPolicy(policy.getPolicyId(),policy.getInsurerName(), policy.getPolicyName(), policy.getMinAge(), policy.getMaxAge());


    }

    @Override
    public Insured createInsured(Insured insured) {
        return recommendationsRepo.newInsured(insured.getInsuredId(),insured.getUsername(),insured.getGender());
    }


    @Override
    public Insurer updateInsurer(Insurer insurer) {
        return recommendationsRepo.updateInsurer(insurer.getInsurerId(),insurer.getInsurerName(),insurer.getInsurerLicense());
    }

    @Override
    public Policy updatePolicy(Policy policy) {
        return recommendationsRepo.updatePolicy(policy.getPolicyId(),policy.getPolicyName(),policy.getMinAge(),policy.getMaxAge());
    }

    @Override
    public Insured updateInsured(Insured insured) {
        return null;
    }


    @Override
    public String insurerPolicy(String insurerName, int policyId) {
        recommendationsRepo.insurerPolicy(insurerName,policyId);
        return " ";
    }

    @Override
    public String insuredPolicy(int policyId, int insuredId) {
        recommendationsRepo.insuredPolicy(policyId,insuredId);
        return " ";
    }

    @Override
    public String viewPolicy(int policyId, int insurerId) {
        recommendationsRepo.viewedPolicy(policyId,insurerId);
        return " ";
    }





    @Override
    public List<Policy> displayPolicy() {
        return recommendationsRepo.findViewedPolicy();
    }

    @Override
    public List<Policy> getByUserName(String userName) {
        return recommendationsRepo.findByuserName(userName);
    }


    @Override
    public List<Policy> getByAge(Integer age) {
        return recommendationsRepo.findByAge(age);
    }

    @Override
    public List<Policy> getByGender(List<String> userGender) {
        return recommendationsRepo.findByGender(userGender);
    }

    @Override
    public List<Policy> getByDisease(List<String> policyDisease) {
        return recommendationsRepo.findByDisease(policyDisease);
    }


}