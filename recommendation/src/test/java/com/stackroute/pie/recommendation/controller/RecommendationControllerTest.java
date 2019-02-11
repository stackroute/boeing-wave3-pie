//package com.stackroute.pie.controller;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import policy;
//import RecommendationServiceImpl;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.mockito.junit.MockitoJUnitRunner;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.kafka.core.KafkaTemplate;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import javax.swing.*;
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.junit.Assert.*;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(RecommendationController.class)
//public class RecommendationControllerTest {
//
//    @Autowired
//    private MockMvc mockMVC;
//
//    @MockBean
//    private RecommendationServiceImpl recommendationService;
//    @MockBean
//    private KafkaTemplate<String, List<policy>> kafkaTemplate;
//
//    @InjectMocks
//    private RecommendationController recommendationController;
//
//    private List<policy> listpolicy;
//    private policy policyObj;
//
//    @Before
//    public void setUp() throws Exception {
//        MockitoAnnotations.initMocks(this);
//
//        mockMVC = MockMvcBuilders.standaloneSetup(recommendationController).build();
//        policyObj = new policy(32, "Selfcare policy", "Individual", null, 0, 0, 0, 0, 0, 18, 60, null, null, null, null, null,null);
//        listpolicy = new ArrayList<>();
//        listpolicy.add(policyObj);
//
//    }
//
//    @Test
//    public void getAll () throws NullPointerException, Exception{
//
//
//            mockMVC.perform(get("/rest/neo4j/recommendations/policies")
//                .contentType(MediaType.APPLICATION_JSON)
//                    .accept(MediaType.APPLICATION_JSON)
//                .content(jsonToString(policyObj)))
//                .andExpect(status().isOk());
////        verify(recommendationService, Mockito.times(1)).displayPolicy();
////        verifyNoMoreInteractions(recommendationService);
//
//    }
//
//    private static String jsonToString(final Object obj) throws JsonProcessingException {
//        String result;
//        try {
//
//            final ObjectMapper mapper = new ObjectMapper();
//            final String jsonContent = mapper.writeValueAsString(obj);
//            result = jsonContent;
//        } catch (JsonProcessingException e) {
//            result = "Json processing error";
//        }
//        return result;
//    }
//}