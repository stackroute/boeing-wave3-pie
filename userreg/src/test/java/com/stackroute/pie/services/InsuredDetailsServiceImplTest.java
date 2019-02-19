package com.stackroute.pie.services;

import com.stackroute.pie.domain.Request;
import com.stackroute.pie.domain.Insured;
import com.stackroute.pie.Repository.UserRepository;
import com.stackroute.pie.exceptions.UserNotFoundException;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

public class InsuredDetailsServiceImplTest {

    private Optional optional;
    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private UserDetailsServiceImpl userProfileService;
    private List<Request> requestList = new ArrayList<>();
    private Insured insured;
    private int userId = 0;
    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        requestList.add(0,new Request(2,"acc","xyz","abc"));
        insured = new Insured(1,requestList);
        optional = Optional.of(insured);
    }
    @Test
    public void getRequestsSuccess() throws UserNotFoundException,Exception {
        when(userRepository.existsByInsuredId(insured.getInsuredId())).thenReturn(true);
        when(userRepository.findByInsuredId(insured.getInsuredId())).thenReturn(optional);
        Insured expectedOutput = userProfileService.getRequests(insured.getInsuredId());
        assertEquals(optional.get(),expectedOutput);
    }
}
