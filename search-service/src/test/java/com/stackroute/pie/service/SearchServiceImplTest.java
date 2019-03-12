package com.stackroute.pie.service;

import com.stackroute.pie.domain.Policy;
import com.stackroute.pie.domain.SearchPDM;
import com.stackroute.pie.repository.SearchRepository;
import com.stackroute.pie.repository.SearchValueRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.internal.verification.VerificationModeFactory.times;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

public class SearchServiceImplTest {

    private Optional optional;
    @Mock
    SearchRepository searchRepository;

    @Mock
    SearchValueRepository searchValueRepository;

    @InjectMocks
    SearchServiceImpl searchService;

    Policy policy;
    List<Policy> policy1;
    List<String> diseasesCovered;
    List<String> cashlessHospitals;
    String companyString;
    String policyString;
    String diseaseString;
    SearchPDM searchPDM;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);

        companyString = "MaxBupa,StarHealth,Apollo,Religare";
        policyString = "JeevanSathi , JeevanAnand ,JeevanVima ,HealthSecure ,JeevanHealth";
         diseaseString = "cancer, diabetes, aids, dengue, malaria, tuberculosis, cardiac, heartattack, surgery";
        policy1 = new ArrayList<>();
        diseasesCovered=new ArrayList<>();
        diseasesCovered.add("cancer");
        diseasesCovered.add("cardiac");
        policy = new Policy(40,
                "ApolloHealthCare",
                "Apollo",
                "group",
                "Apollo",
                3, diseasesCovered,
                cashlessHospitals,
                6,
                "both",
                "Apollo",
                "Apollo policy",
                5000,
                60000,
                null,
                10,
                30,
                null,
                null);
        policy1.add(policy);
        searchPDM = new SearchPDM();
        searchPDM.setSearchValue("ApolloHealthCare");
        searchPDM.setCount(0);
        optional = Optional.of(policy);
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void getAllPolicies() {
        when(searchRepository.findAll()).thenReturn(policy1);
       List<Policy> actual=searchService.getAllPolicies("cancer");
       assertEquals(policy1,actual);
        verify(searchRepository, Mockito.times(1)).findAll();
//        verifyNoMoreInteractions(trackService);
    }


//    @Test
//    public void getAllPolicies1() {
//        when(searchRepository.findAll()).thenReturn(policy1);
//        List<Policy> actual=searchService.getAllPolicies("diabetes");
//        assertEquals(policy1,actual);
//        verify(searchRepository, Mockito.times(1)).findAll();
////        verifyNoMoreInteractions(trackService);
//    }

    @Test
    public void savePolicy() {
        when(searchRepository.save(policy)).thenReturn(policy);
        Policy actual = searchService.savePolicy(policy);
        assertEquals(policy, actual);
        verify(searchRepository, times(1)).save(policy);

    }


//    @Test
//    public void saveSearch() {
//        when(searchValueRepository.existsById(policy.getPolicyName())).thenReturn(true);
//        String policyName ="ApolloHealthCare";
//        when(searchValueRepository.findBySearchValue(policy.getPolicyName())).thenReturn(searchPDM);
//        Policy actual = searchService.savePolicy(policy);
//        assertEquals(policy, actual);
//        verify(searchRepository, times(1)).save(policy);
//
//    }

//    @Test
//    public void tokenString() throws Exception {
////        if(policyString.contains("JeevanSathi"))
////            when( searchRepository.findByPolicyName("JeevanSathi")).thenReturn(policy1);
////            List<Policy> actual6=searchService.tokenString("JeevanSathi");
////            assertEquals(policy1,actual6);
//        int ag=30;
//        if(ag<100)
//            when( searchRepository.findAll()).thenReturn(policy1);
//           List<Policy> list = new ArrayList<>();
//            for(Policy p:policy1) {
//                if (p.getMinAge() < ag && p.getMaxAge() > ag) {
//                    list.add(p);
//                }
//            }
//            List<Policy> actual6=searchService.tokenString("30");
//            assertEquals(list,actual6);
//
//        int sum=3000;
//        if(sum>1000)
//            when( searchRepository.findAll()).thenReturn(policy1);
//        List<Policy> list1 = new ArrayList<>();
//        for(Policy p:policy1) {
//            if (p.getMinSumInsured()<=sum && p.getMaxSumInsured()>=sum) {
//                list1.add(p);
//            }
//        }
//        List<Policy> actual7=searchService.tokenString("3000");
//        SearchPDM searchPDM = new SearchPDM();
//        searchPDM =
//        assertEquals(list1,actual7);
//
//        if(companyString.contains("MaxBupa"))
//            when( searchRepository.findByInsurerName("MaxBupa")).thenReturn(policy1);
//            List<Policy> actual8=searchService.tokenString("MaxBupa");
//            assertEquals(policy1,actual8);

//        if(policyString.contains("JeevanSathi") && diseaseString.contains("cancer"))
//        when( searchRepository.findByDiseasesName("cancer")).thenReturn(policy1);
//        List<Policy> addPolicy =new ArrayList<>();
//        for(Policy p:policy1){
//            if(p.getPolicyName().equals("JeevanSathi")){
//                addPolicy.add(p);
//            }
//        }
//        List<Policy> actual=searchService.tokenString("cancer JeevanSathi");
//        assertEquals(addPolicy,actual);
//
//        if(companyString.contains("MaxBupa") && diseaseString.contains("cancer"))
//            when( searchRepository.findByDiseasesListDiseaseName("cancer")).thenReturn(policy1);
//        List<Policy> addPolicy1 =new ArrayList<>();
//        for(Policy p:policy1){
//            if(p.getInsurerName().equals("MaxBupa")){
//                addPolicy1.add(p);
//            }
//
//        }
//        List<Policy> actual1=searchService.tokenString("MaxBupa cancer");
//        assertEquals(addPolicy1,actual1);
//
//        if(companyString.contains("MaxBupa"))
//            when( searchRepository.findByInsurerName("MaxBupa")).thenReturn(policy1);
//        List<Policy> addPolicy2 =new ArrayList<>();
//        for(Policy p:policy1){
//            if(p.getPolicyName().equals("JeevanSathi")){
//                addPolicy2.add(p);
//            }
//        }
//        List<Policy> actual2=searchService.tokenString("MaxBupa JeevanSathi");
//        assertEquals(addPolicy2,actual2);
//
//        if(policyString.contains("JeevanSathi"))
//            when( searchRepository.findByPolicyName("JeevanSathi")).thenReturn(policy1);
//        List<Policy> addPolicy3 =new ArrayList<>();
//        for(Policy p:policy1){
//            if(p.getInsurerName().equals("MaxBupa")){
//                addPolicy3.add(p);
//            }
//        }
//        List<Policy> actual3=searchService.tokenString("MaxBupa JeevanSathi");
//        assertEquals(addPolicy3,actual3);
//
////        int num=4000;
////        if(policyString.contains("JeevanSathi") && num>1000)
////            when( searchRepository.findByPolicyName("JeevanSathi")).thenReturn(policy1);
////            List<Policy> addPolicy4 =new ArrayList<>();
////
////        for(Policy p:policy1){
//////            System.out.println("amm" + (p.getSumInsured()==num));
////            if(p.getSumInsured()==num){
////                System.out.println(p.getSumInsured());
////                addPolicy4.add(p);
////            }
////        }
////        List<Policy> actual4=searchService.tokenString(" JeevanSathi  4000");
////        assertEquals(addPolicy4,actual4);
//
//        int age=30;
//        if(policyString.contains("JeevanSathi") && age<100)
//            when( searchRepository.findByPolicyName("JeevanSathi")).thenReturn(policy1);
//        List<Policy> addPolicy5 =new ArrayList<>();
//
//        for(Policy p:policy1){
////            System.out.println("amm" + (p.getSumInsured()==num));
//            if(p.getMinAge()<age && p.getMaxAge()>age){
////                System.out.println(p.getSumInsured());
//                addPolicy5.add(p);
//            }
//        }
//        List<Policy> actual5=searchService.tokenString(" JeevanSathi  30");
//        assertEquals(addPolicy5,actual5);


  //  }

}