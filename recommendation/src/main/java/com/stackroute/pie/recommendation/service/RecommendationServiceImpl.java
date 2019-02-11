package com.stackroute.pie.recommendation.service;

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
}


