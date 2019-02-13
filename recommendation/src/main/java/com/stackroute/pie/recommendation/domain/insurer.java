package com.stackroute.pie.recommendation.domain;


;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import javax.validation.GroupSequence;

@NodeEntity
public class insurer {

    @Relationship(type= "POLICY_OF" ,direction=Relationship.INCOMING)
    @Id
//    private Long id;
    public  int insurerId;
    public String insurerName;
    public String insurerLicense;
    public String insurerEmail;
    public String password;
    public String insurerAddress;
    public String securityQuestion;
    public String securityAnswer;


    public insurer(int insurerId, String insurerName, String insurerLicense, String insurerEmail, String password, String insurerAddress, String securityQuestion, String securityAnswer) {
        this.insurerId = insurerId;
        this.insurerName = insurerName;
        this.insurerLicense = insurerLicense;
        this.insurerEmail = insurerEmail;
        this.password = password;
        this.insurerAddress = insurerAddress;
        this.securityQuestion = securityQuestion;
        this.securityAnswer = securityAnswer;
    }



    public int getInsurerId() {
        return insurerId;
    }

    public void setInsurerId(int insurerId) {
        this.insurerId = insurerId;
    }

    public insurer(String insurerName) {
        this.insurerName = insurerName;
    }

    public String getInsurerName() {
        return insurerName;
    }

    public String getInsurerLicense() {
        return insurerLicense;
    }

    public String getInsurerEmail() {
        return insurerEmail;
    }

    public String getPassword() {
        return password;
    }

    public String getInsurerAddress() {
        return insurerAddress;
    }

    public String getSecurityQuestion() {
        return securityQuestion;
    }

    public String getSecurityAnswer() {
        return securityAnswer;
    }
}

