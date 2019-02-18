package com.stackroute.pie.recommendation.service;

import com.stackroute.pie.recommendation.domain.policy;

import java.util.List;

public interface RecommendationService {
    List<policy> displayPolicy();
    List<policy> getByUserName(String userName);

}
