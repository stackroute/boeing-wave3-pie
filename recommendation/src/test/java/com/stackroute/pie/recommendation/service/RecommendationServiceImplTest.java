//package com.stackroute.pie.recommendation.service;
//
//import com.stackroute.pie.recommendation.domain.policy;
//import com.stackroute.pie.recommendation.repository.RecommendationRepo;
//import org.junit.Before;
//import org.junit.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.junit.Assert.*;
//import static org.mockito.Mockito.when;
//
//public class RecommendationServiceImplTest {
//
//    @Mock
//    private RecommendationRepo recommendationRepo;
//
//
//    @InjectMocks
//    private  RecommendationServiceImpl recommendationService;
//
//    private List<policy> policy1;
//    private policy policyObj;
//    @Before
//    public void setUp() throws Exception{
//        MockitoAnnotations.initMocks(this);
//        policy1 = new ArrayList<>();
//        policyObj = new policy(32,"Selfcare policy","Individual",null,0,0,0,0,0,18,60,null,null,null,null,null,null);
//    }
//    @Test
//    public void displayPolicy() {
//        policy1.add(policyObj);
//        when(recommendationRepo.findAllPolicy()).thenReturn(policy1);
//        List<policy> actual = recommendationRepo.findAllPolicy();
//        assertEquals(policy1.toString(),actual.toString());
//    }
//}