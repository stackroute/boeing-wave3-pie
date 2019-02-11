package com.stackroute.pie.searchservice.controller;

import com.stackroute.pie.searchservice.domain.Policy;
import com.stackroute.pie.searchservice.service.SearchServiceImpl;
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

    @PostMapping(value = "policy")
    public ResponseEntity<?> savePolicy(@RequestBody Policy policy)
    {
        ResponseEntity responseEntity;
        Policy policy1 = searchService.savePolicy(policy);
        responseEntity = new ResponseEntity<Policy>(policy1, HttpStatus.CREATED);
        return responseEntity;
    }
    @GetMapping(value = "policies/{value}")
    public ResponseEntity<?> getPolicies(@PathVariable(value = "value") String value)
    {
        List<Policy> allPolicies = searchService.getAllPolicies(value);

        return new ResponseEntity<List<Policy>>(allPolicies, HttpStatus.OK);
    }



}
