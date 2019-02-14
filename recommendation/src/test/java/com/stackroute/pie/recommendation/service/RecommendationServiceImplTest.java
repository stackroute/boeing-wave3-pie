package com.stackroute.pie.recommendation.service;

import com.stackroute.pie.recommendation.domain.insured;
import com.stackroute.pie.recommendation.domain.insurer;
import com.stackroute.pie.recommendation.domain.policy;
import com.stackroute.pie.recommendation.repository.RecommendationRepo;
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

public class RecommendationServiceImplTest {

    @Mock
    private RecommendationRepo recommendationRepo;

    @InjectMocks
    private RecommendationServiceImpl recommendationService;
    private policy policy1;
    private insured insured1;
    private insurer insurer1;
    private List<policy> policyList;
    private List<String> diseaseList = new ArrayList<String>();
    private List<String> gender1 = new ArrayList<String>();

    @Before
    public  void  setup(){
        MockitoAnnotations.initMocks(this);
        diseaseList.add("Cancer");
        gender1.add("female");
        policy1= new policy(7, "Policyyyy", gender1,"family", diseaseList,2, 234,1, 344,2455,2, 66,"Bangalore","Teju","KUshiii");
        insured1= new insured(8,"Tejaswinii","female","9449156214","teju@gmail.com","Bangalore","Tejaswini Srinivas",22,2,4);
        insurer1= new insurer(9,"State Bank","18737ah8","statbank@gmail.com","teju178","Bangalore","favourite color","red");


    }


    @Test
    public void displayPolicy() {
        policyList=(List<policy>) recommendationRepo.findAll();
        Mockito.when(policyList).thenReturn(policyList);
        List policyList1=recommendationService.displayPolicy();
        assertEquals(policyList,policyList1);
       // verify(recommendationRepo,times(1)).findAll();
    }


    @Test
    public void createInsurerTest(){
        Mockito.when(recommendationRepo.saveInsurer(9,"State Bank","18737ah8","statbank@gmail.com","teju178","Bangalore","favourite color","red")).thenReturn(insurer1);
        insurer insurersaved=recommendationService.createInsurer( insurer1);
        System.out.println(insurersaved);
        assertEquals(insurersaved,insurer1);
    }

    @Test
    public void createPolicyTest(){
        when(recommendationRepo.savePolicy(7, "Policyyyy", gender1,"family", diseaseList,2, 234,1, 344,2455,2, 66,"Bangalore","Teju","KUshiii")
).thenReturn(policy1);
        policy policy4 = recommendationService.createPolicy(policy1);
        assertEquals(policy4,policy1);
    }

    @Test
    public void createInsuredTest(){
        when(recommendationRepo.saveInsured(8,"Tejaswinii","female","9449156214","teju@gmail.com","Bangalore","Tejaswini Srinivas",22,2,4)).thenReturn(insured1);
        insured insured2=recommendationService.createInsured(insured1);
        assertEquals(insured2,insured1);
    }
@Test
    public void insurerUpdateTest(){
        when(recommendationRepo.updateInsurer(9,"State Bank","18737ah8","statbank@gmail.com","teju178","Bangalore","favourite color","red")).thenReturn(insurer1);
        insurer insurer2=recommendationService.updateInsurer(insurer1);
        assertEquals(insurer2,insurer1);

    }

    @Test
    public void policyUpdateTest(){
        when(recommendationRepo.updatePolicy(7, "Policyyyy", gender1,"family", diseaseList,2, 234,1, 344,2455,2, 66,"Bangalore","Teju","KUshiii")).thenReturn(policy1);
        policy policy2=recommendationService.updatePolicy(policy1);
        assertEquals(policy2,policy1);
    }

    @Test
    public void insuredUpdateTest(){
        when(recommendationRepo.updateInsured(8,"Tejaswinii","female","9449156214","teju@gmail.com","Bangalore","Tejaswini Srinivas",22,2,4)).thenReturn(insured1);
        insured insured2=recommendationService.updateInsured(insured1);
        assertEquals(insured2,insured1);
    }

    @Test
    public void insurerDeleteTest(){
        when(recommendationRepo.deleteInsurer("18737ah8")).thenReturn(insurer1);
        insurer insurer2=recommendationService.deleteInsurer(insurer1);
        assertEquals(insurer2,insurer1);

    }

    @Test
    public void policyDeleteTest(){
        when(recommendationRepo.deletePolicy(7)).thenReturn(policy1);
        policy policy2=recommendationService.deletePolicy(policy1);
        assertEquals(policy2,policy1);

    }

  @Test
    public void insuredDeleteTest(){
        when(recommendationRepo.deleteInsured(8)).thenReturn(insured1);
        insured insured2=recommendationService.deleteInsured(insured1);
        assertEquals(insured2,insured1);
    }
}