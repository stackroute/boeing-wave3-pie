package com.stackroute.pie.searchservice.service;

import com.stackroute.pie.searchservice.domain.Policy;

import java.util.List;

public interface SearchService {
    public List<Policy> getAllPolicies(String value);
    public Policy savePolicy(Policy policy);
}
