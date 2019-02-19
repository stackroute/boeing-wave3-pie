package com.stackroute.pie.services;

import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.message.request.SignUpForm;

import java.util.List;

public interface InsurerService {
    public Insurer addNewPolicy(Policy policy);
    public List<Policy> getPolicies(String insurerLicense);
    public Insurer deletePolicy(String insurerName,long policyId);
    public Insurer addInsurer(SignUpForm signUpForm);
}
