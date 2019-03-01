package com.stackroute.pie.service;

import com.stackroute.pie.domain.Policy;
import org.springframework.http.ResponseEntity;

public interface PolicyService {
    //Method for adding the policy for insurer
    ResponseEntity<?> addPolicy(Policy policy);
    //Method for deleting the policy for insurer
    ResponseEntity<?> deletePolicy(Policy policy);
    //Method for getting the policy for insurer
    ResponseEntity<?> getPolicy(String insurerName);
    //Method to find policy based on insurerName and policyName for more view
    ResponseEntity<?> getPolicyForUser(String insurerName,String policyName);
    //Method for adding the inusredName into the policy mentioned
    ResponseEntity<?> addInsured(String insurerName,String policyName, String insuredName);
    //Method for deleting the insuredName from the policy
    ResponseEntity<?> deleteInsured(String insurerName,String policyName, String insuredName);
    //Method to get the policies of the Insured
    ResponseEntity<?> getPoliciesOfUser(String insuredName);
}
