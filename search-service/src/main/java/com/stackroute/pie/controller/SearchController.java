package com.stackroute.pie.controller;

import com.stackroute.pie.domain.Diseases;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.service.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class SearchController {
    private SearchServiceImpl searchService;
    @Autowired
    public  SearchController(SearchServiceImpl searchService){
        this.searchService = searchService;
    }
    //save method (temporary purpose)
    @PostMapping(value = "policy")
    public ResponseEntity<?> savePolicy(@RequestBody Policy policy)
    {
        ResponseEntity responseEntity;
        Policy policy1 = searchService.savePolicy(policy);
        responseEntity = new ResponseEntity<Policy>(policy1, HttpStatus.CREATED);
        return responseEntity;
    }
    //to get policyList based on searchvalue
    @GetMapping(value="policies/{value}")
    public ResponseEntity<?> tokeniseString(@PathVariable(value = "value")String value)
    { ResponseEntity responseEntity;
        try {
            List<Policy> alltokens = searchService.tokenString(value);
            responseEntity= new ResponseEntity<List<Policy>>(alltokens, HttpStatus.OK);
        }
        catch(Exception ex){
            responseEntity = new ResponseEntity<String>(ex.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
}
