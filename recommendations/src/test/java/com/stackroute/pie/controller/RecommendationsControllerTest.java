//package com.stackroute.pie.controller;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.stackroute.pie.domain.FamilyMembers;
//import com.stackroute.pie.domain.Insured;
//import com.stackroute.pie.domain.Insurer;
//import com.stackroute.pie.domain.Policy;
//import com.stackroute.pie.repository.RecommendationsRepo;
//import com.stackroute.pie.service.RecommendationsServImpl;
//import org.junit.After;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.MockitoAnnotations;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.kafka.core.KafkaTemplate;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(RecommendationsController.class)
//public class RecommendationsControllerTest {
//
//    @MockBean
//    private RecommendationsServImpl recommendationsServ;
//
//    @MockBean
//    //private KafkaTemplate<String, Insurer> kafkaTemplate;
//    private KafkaTemplate<String, List<Policy>> kafkaTemplate;
//
//    @MockBean
//    private RecommendationsRepo recommendationsRepo;
//
//    @InjectMocks
//    private RecommendationsController recommendationsController;
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    private Insurer insurer1;
//    private Policy policy1;
//    private Insured insured1;
//    private List<String> diseases = new ArrayList<String>();
//    private List<FamilyMembers> familyMembers=new ArrayList<>() ;
//    private FamilyMembers familyMembers1;
//
//
//    @Before
//    public void setup(){
//        MockitoAnnotations.initMocks(this);
//        diseases.add("Cancer");
//        familyMembers1 = new FamilyMembers("teju","manasa",22,"sister","female");
//        familyMembers.add(familyMembers1);
//        //mockMvc= MockMvcBuilders.standaloneSetup(recommendationsController).build();
//        mockMvc=MockMvcBuilders.standaloneSetup(recommendationsController).build();
//        insurer1=new Insurer(1L,"Starhealth Insurance Company","1INS001","starhealth@gmail.com","starpass","Bangalore","what is ypur favourite food","cake");
//       // policy1=new Policy(11,"Starhealth Insurance Company","Star Comprehensive Insurance Policy",279,1788,78,2,65,2,"female","Family",diseases);
//        insured1=new Insured(1,"tejaswinisrinivas","teju","teju@gmail.com","teju1997","female","cake",22,"Cancer",familyMembers,1);
//
//    }
//
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
//
//
//    @After
//    public void tearDown() throws Exception {
//    }
//
//    @Test
//    public void saveInsurer() throws  Exception{
//        String uri = "/rest/neo4j/recommendations/insurer";
//        this.mockMvc
//                .perform(post(uri)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(insurer1)))
//                .andExpect(status().isCreated());
//    }
//
//
//    @Test
//    public void savePolicy() throws Exception {
//        String uri = "/rest/neo4j/recommendations/policy";
//        this.mockMvc
//                .perform(post(uri)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(policy1)))
//                .andExpect(status().isCreated());
//
//
//    }
//
//
//    @Test
//    public void saveInsured() throws Exception {
//        String uri = "/rest/neo4j/recommendations/insured";
//        this.mockMvc
//                .perform(post(uri)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(insured1)))
//                .andExpect(status().isCreated());
//
//
//    }
//
//
//    @Test
//    public void linkpolicy() throws Exception {
//
//
//        String uri = "/rest/neo4j/recommendations/relationship/Starhealth Insurance Company/11";
//        this.mockMvc
//                .perform(post(uri)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(insurer1)))
//                .andExpect(status().isOk());
//
//
//    }
//
//    @Test
//    public void linkinsured() throws Exception{
//        String uri = "/rest/neo4j/recommendations/relation/11/tejaswini";
//        this.mockMvc
//                .perform(post(uri)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(policy1)))
//                .andExpect(status().isOk());
//
//
//    }
//
//    @Test
//    public void viewPolicy() throws Exception{
//        String uri = "/rest/neo4j/recommendations/relation/11/tejaswini";
//        this.mockMvc
//                .perform(post(uri)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(policy1)))
//                .andExpect(status().isOk());
//
//    }
//
//    @Test
//    public void geUser() throws Exception {
//        String uri = "/rest/neo4j/recommendations/user/tejaswini";
//        this.mockMvc
//                .perform(get(uri)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(insured1)))
//                .andExpect(status().isOk());
//
//    }
//
//
//    @Test
//    public void getByAgeGender() throws Exception{
//        String uri = "/rest/neo4j/recommendations/relation/policyByAgeGender/tejaswini";
//        this.mockMvc
//                .perform(get(uri)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(policy1)));
//               // .andExpect(status().isOk());
//    }
//
//    @Test
//    public void viewPolicy1() throws  Exception{
//        String uri = "/rest/neo4j/recommendations/relation/policies";
//        this.mockMvc
//                .perform(get(uri)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(policy1)));
//
//    }
//
//
//}