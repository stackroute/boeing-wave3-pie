package com.stackroute.pie.recommendation.domain;

import org.neo4j.ogm.annotation.*;

import java.util.List;
@NodeEntity
public class insured {
    @Relationship(type= "SUFFERING_FROM" ,direction=Relationship.OUTGOING)
    @Id
    private Long id;
    private int userId;
    private String userName;
    private String gender;
    private String phoneNumber;

    private String emailId;

    private String address;

    private String name;
//    private List<policy> policies;
    private int age;
    private int remainingWaitingPeriod;
    private int familyMembers;

    public insured(int userId) {
        this.userId = userId;
    }


    public int getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public String getGender() {
        return gender;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmailId() {
        return emailId;
    }

    public String getAddress() {
        return address;
    }

    public String getName() {
        return name;
    }

//    public List<policy> getPolicies() {
//        return policies;
//    }

    public int getAge() {
        return age;
    }

    public int getRemainingWaitingPeriod() {
        return remainingWaitingPeriod;
    }

    public int getFamilyMembers() {
        return familyMembers;
    }

    public insured() {
    }
}
