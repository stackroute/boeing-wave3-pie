package com.stackroute.pie.searchservice.service;

import com.stackroute.pie.searchservice.domain.Diseases;
import com.stackroute.pie.searchservice.domain.Policy;
import com.stackroute.pie.searchservice.repository.SaveRepository;
import com.stackroute.pie.searchservice.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {
    private SearchRepository searchRepository;
    private SaveRepository saveRepository;

    @Autowired
    public SearchServiceImpl(SearchRepository searchRepository, SaveRepository saveRepository){
        this.searchRepository = searchRepository;
        this.saveRepository = saveRepository;
    }

    @Override
    public List<Policy> getAllPolicies(String value) {
//        SearchPDM searchvalue = new SearchPDM();
        String diseases = "cancer, diabetes, aids, dengue, malaria, tuberculosis, cardiac, heartattack, surgery";
        List<Policy> policy1 = new ArrayList<>();
        List<Policy> policy2= new ArrayList<>();


        if (diseases.contains(value)) {

            int count = 0;
            String[] strings = diseases.split(", ");
            for (int i = 0; i < strings.length; i++) {

                if (strings[i].matches(value)) {
                    System.out.println("String value" + value);
//                        searchvalue.setDisease(value);
//                        searchvalue.setCount(count++);
                    List<Policy> policies = searchRepository.findAll();
                    for (Policy a : policies) {
                        System.out.println("Inside policy" + a);
                        List<Diseases> disease = a.getDiseasesList();
                        for (Diseases d : disease) {
                            System.out.println("Inside disease" + d);
                            if (d.getDiseaseName().equals(value)) {
                                System.out.println("Inside if part of disease" + d.getDiseaseName());
                                policy1.add(a);
                            }
                        }
                    }
                }
            }
            return policy1;
        }
        else{
        int count = 0;
//            searchvalue.setPolicyName(value);
//            searchvalue.setCount(count++);
        policy2 = searchRepository.findByPolicyName(value);
        return policy2;
    }
    }

        @Override
        public Policy savePolicy (Policy policy){
            Policy policy1 = searchRepository.save(policy);
            return policy1;
        }
    }


