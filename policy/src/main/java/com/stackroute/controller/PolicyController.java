package com.stackroute.controller;

import com.stackroute.domain.Policy;
import com.stackroute.repository.PolicyRepository;
import com.stackroute.service.PolicyService;
import com.stackroute.service.PolicyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.service.ResponseMessage;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "*")
public class PolicyController {

    private PolicyRepository policyRepository;
    private PolicyServiceImpl policyService;

    @Autowired
    PolicyController(PolicyRepository policyRepository, PolicyServiceImpl policyService) {
        this.policyRepository = policyRepository;
        this.policyService = policyService;
    }

    //Adding the policy for insurer
    @PostMapping("policy")
    public ResponseEntity<?> addPolicy(@RequestBody Policy policy) {
        return policyService.addPolicy(policy);
    }

    //Deleting the policy for insurer
    @DeleteMapping("policy")
    public ResponseEntity<?> deletePolicy(@RequestBody Policy policy) {
        return policyService.deletePolicy(policy);
    }

    //Getting the policy for insurer
    @GetMapping("policy/{insurerName}")
    public ResponseEntity<?> getPolicy(@PathVariable(value = "insurerName") String insurerName) {
        return policyService.getPolicy(insurerName);
    }

    //Get policies of Insured based on Insured Name
    @GetMapping("policies/{insuredName}")
    public ResponseEntity<?> getPolicyofInsured(@PathVariable(value = "insuredName") String insuredName) {
        return policyService.getPoliciesOfUser(insuredName);
    }

    //Getting the policy for insurerd for more details
    @GetMapping("policy/{insurerName}/{policyName}")
    public ResponseEntity<?> getPolicyforInsured(@PathVariable(value = "insurerName") String insurerName,
                                       @PathVariable(value = "policyName") String policyName) {
        return policyService.getPolicyForUser(insurerName,policyName);
    }

    //Added the insuredName into the policy
    @PutMapping("policy/{insurerName}/{policyName}/{insuredName}")
    public ResponseEntity<?> addInsured(@PathVariable(value = "insurerName") String insurerName,
                                        @PathVariable(value = "policyName") String policyName,
                                        @PathVariable(value = "insuredName") String insuredName) {
        return policyService.addInsured(insurerName,policyName,insuredName);
    }

    //Delete the insuredName in the policy
    @DeleteMapping("policy/{insurerName}/{policyName}/{insuredName}")
    public ResponseEntity<?> deleteInsured(@PathVariable(value = "insurerName") String insurerName,
                                        @PathVariable(value = "policyName") String policyName,
                                        @PathVariable(value = "insuredName") String insuredName) {
        return policyService.deleteInsured(insurerName,policyName,insuredName);
    }
}