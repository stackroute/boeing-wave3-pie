package com.stackroute.pie.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.pie.domain.Request;
import com.stackroute.pie.domain.Insured;
<<<<<<< HEAD
=======
import com.stackroute.pie.message.request.SignUpForm;
import com.stackroute.pie.repository.UserRepository;
import com.stackroute.pie.security.WebSecurityConfig;
import com.stackroute.pie.security.jwt.JwtAuthEntryPoint;
import com.stackroute.pie.security.jwt.JwtAuthTokenFilter;
import com.stackroute.pie.security.jwt.JwtProvider;
>>>>>>> 3de358dbbad207899bb0346a76d7c27548f0c3fa
import com.stackroute.pie.services.UserDetailsServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
<<<<<<< HEAD
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)

public class UserControllerTest {

        @Autowired
        private MockMvc mockMVC;
        @Mock
        private UserDetailsServiceImpl userProfileService;
        @InjectMocks
        private UserController userController;
        private int insuredId;
        private Insured user;
        private List<Request> requestList = new ArrayList<>();

        @Before
        public void setUp() throws Exception {
            mockMVC = MockMvcBuilders.standaloneSetup(userController).build();
            user = new Insured(1,"anusha","anusha123","anusha@gmail.com","anusha",21,"female","cat");
//            requestList.add(0,new Request(2,"acc","xyz","abc"));
//            user = new Insured(1,requestList);
        }
    @Test
    public void updateSuccess() throws Exception {
//
        mockMVC.perform(put("/api/auth/profile/anusha123")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(user)))
                .andExpect(status().isOk());
//        verify(userProfileService, Mockito.times(1)).updateProfile(Mockito.any(Insured.class));
//        verifyNoMoreInteractions(portingRequestService);
    }
@Test
public void getProfileSuccess() throws Exception {
//            when(portingRequestService.getRequests(portingRequest.getInsuredName())).thenReturn(portingRequestList);
    mockMVC.perform(get("/api/auth/profile/anusha123")
            .contentType(MediaType.APPLICATION_JSON)
            .content(jsonToString(user)))
            .andExpect(status().isOk());
    verify(userProfileService, Mockito.times(1)).getProfile(user.getUsername());
    verifyNoMoreInteractions(userProfileService);
}
        private static String jsonToString(final Object obj) throws JsonProcessingException {
            String result;
            try {
                final ObjectMapper mapper = new ObjectMapper();
                final String jsonContent = mapper.writeValueAsString(obj);
                result = jsonContent;
            } catch (JsonProcessingException e) {
                result = "Json processing error";
            }
            return result;
        }
    }
=======
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import java.util.Date;



import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMVC;
    @MockBean
    private UserDetailsServiceImpl userProfileService;
    @MockBean
    private UserRepository userRepository;
    @MockBean
    PasswordEncoder passwordEncoder;

    @MockBean
    JwtAuthEntryPoint jwtAuthEntryPoint;

    @MockBean
    JwtProvider jwtProvider;

    @MockBean
    JwtAuthTokenFilter jwtAuthTokenFilter;

//        @MockBean
//    WebSecurityConfig webSecurityConfig;

    @MockBean
    private KafkaTemplate<String, Insured> kafkaTemplate;

    @InjectMocks
    private UserController userController;

    Insured user;

    SignUpForm signUpForm;


    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        mockMVC = MockMvcBuilders.standaloneSetup(userController).build();
        signUpForm = new SignUpForm();
        signUpForm.setAge(22);
        signUpForm.setEmail("saurabh@gmail.com");
        signUpForm.setFullName("saurabh");
        signUpForm.setGender("male");
        signUpForm.setPassword("qwertyu");
        signUpForm.setSecurityAnswer("food");
        signUpForm.setCreatedDate(new Date());
        signUpForm.setUsername("qwertyu");
        Insured  user =new Insured(signUpForm.getFullName(),signUpForm.getUsername(),signUpForm.getEmail(),signUpForm.getPassword(),signUpForm.getGender(),signUpForm.getCreatedDate(),signUpForm.getSecurityAnswer(),signUpForm.getAge());


//           Insured user =new Insured("saurabhn","saurabh","saurabhna","sasa@gmail.com","qwertyu",null,"male",4);


    }



    @Test
    public void registerUser() throws Exception {
//        Mockito.when(userRepository.save(user)).thenReturn(user);
        String uri ="/api/auth/signup";
        this.mockMVC.perform(post(uri)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(asJsonString(signUpForm)))
                .andExpect(status().isOk());


    }
    public static String asJsonString(final Object object) {
        try {
            return new ObjectMapper().writeValueAsString(object);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }


    }



}
>>>>>>> 3de358dbbad207899bb0346a76d7c27548f0c3fa
