package com.stackroute.pie.domain;

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

    public insured( int userId, String userName, String gender, String phoneNumber, String emailId, String address, String name, int age, int remainingWaitingPeriod, int familyMembers) {
        //this.id = id;
        this.userId = userId;
        this.userName = userName;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.emailId = emailId;
        this.address = address;
        this.name = name;
        this.age = age;
        this.remainingWaitingPeriod = remainingWaitingPeriod;
        this.familyMembers = familyMembers;
    }



    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setRemainingWaitingPeriod(int remainingWaitingPeriod) {
        this.remainingWaitingPeriod = remainingWaitingPeriod;
    }

    public void setFamilyMembers(int familyMembers) {
        this.familyMembers = familyMembers;
    }
}
