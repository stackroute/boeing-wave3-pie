package com.stackroute.pie.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.pie.domain.Request;
import com.stackroute.pie.domain.Insured;
import com.stackroute.pie.services.UserDetailsServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
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
