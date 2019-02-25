package com.stackroute.pie.service;

import com.stackroute.pie.domain.Insured;
import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.repository.RecommendationsRepo;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

public class RecommendationsServImplTest {
    @Mock
    private RecommendationsRepo recommendationsRepo;

    @InjectMocks
    private  RecommendationsServImpl recommendationsServ;
    private Insurer insurer1;
    private Policy policy1;
    private List<String> diseases = new ArrayList<String>();
    private List<Policy> policyList = new ArrayList<>();

    private Insured insured1;

    @Before
    public void setup(){
        MockitoAnnotations.initMocks(this);
        diseases.add("Cancer");
//        policyList.add(policy1);
        insurer1=new Insurer(1L,"Starhealth Insurance Company","1INS001","starhealth@gmail.com","starpass","Bangalore","what is ypur favourite food","cake");
        policy1=new Policy(11,"Starhealth Insurance Company","Star Comprehensive Insurance Policy",279,1788,78,2,65,2,"female","Family",diseases);
        policyList.add(policy1);

      //  policyList.add(new Policy());
        insured1=new Insured(1,"tejaswinisrinivas","teju","teju@gmail.com","teju1997","female","cake",22);

    }

    @Test
    public void findUser() {
       // when(recommendationsRepo.findUser(username));


    }

    @Test
    public void createInsurer() {
        when(recommendationsRepo.newInsurer(1L,"Starhealth Insurance Company","1INS001")).thenReturn(insurer1);
        Insurer insurerSaved=recommendationsServ.createInsurer(insurer1);
        System.out.println(insurerSaved);
        assertEquals(insurerSaved,insurer1);
    }

    @Test
    public void createInsured() {
        when(recommendationsRepo.newInsured(1,"teju","female",22)).thenReturn(insured1);
        Insured insuredSaved=recommendationsServ.createInsured(insured1);
        assertEquals(insuredSaved,insured1);
    }

    @Test
    public void findUser1() {
        when(recommendationsRepo.findUser("teju")).thenReturn(insured1);
        Insured user=recommendationsServ.findUser("teju");
        assertEquals(user,insured1);
    }



}