package com.stackroute.pie.repository;

import com.stackroute.pie.domain.Insurer;
import com.stackroute.pie.domain.Policy;
import org.junit.*;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration
@SpringBootTest
public class InsurerRepositoryTest {


    @Autowired
    InsurerRepository insurerRepository;

    private Insurer insurer;
    private Insurer insurer2;
    List<Policy> policy = new ArrayList<>();

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        insurer = new Insurer("maxbupa","maxbupa","maxbupa@gmail.com","maxbupa","bangalore","whats your favourite food","pizza",policy);
        insurer2 = new Insurer("reliance","reliance","reliance@gmail.com","reliance","bangalore","whats your favourite food","pizza",policy);
    }
    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void saveTest() {
        insurerRepository.save(insurer);
        Assert.assertNotNull(insurerRepository.findByInsurerLicense("maxbupa"));
    }
}
