package com.stackroute.pie.model;


//import org.hibernate.annotations.NaturalId;
import java.util.HashSet;
import java.util.Set;

//import javax.persistence.*;



public class Insurer1 {

    private Long insurerId;

    private String insurerName;

    private String insurerLicense; //username

    private String insurerEmail;

    private String password;

    private String insurerAddress;

    private String securityQuestion;

    private String securityAnswer;



    //document inside the doucmnet
    private Set<Policy> policies = new HashSet<>();

    private Set<Role> roles = new HashSet<>();

    public Insurer1() {}

    public Insurer1(Long insurerId, String insurerName, String insurerLicense, String insurerEmail, String password, String insurerAddress, String securityQuestion, String securityAnswer, Set<Policy> policies, Set<Role> roles) {
        this.insurerId = insurerId;
        this.insurerName = insurerName;
        this.insurerLicense = insurerLicense;
        this.insurerEmail = insurerEmail;
        this.password = password;
        this.insurerAddress = insurerAddress;
        this.securityQuestion = securityQuestion;
        this.securityAnswer = securityAnswer;
        this.policies = policies;
        this.roles = roles;
    }

    public Long getInsurerId() {
        return insurerId;
    }

    public void setInsurerId(Long insurerId) {
        this.insurerId = insurerId;
    }

    public String getInsurerName() {
        return insurerName;
    }

    public void setInsurerName(String insurerName) {
        this.insurerName = insurerName;
    }

    public String getInsurerLicense() {
        return insurerLicense;
    }

    public void setInsurerLicense(String insurerLicense) {
        this.insurerLicense = insurerLicense;
    }

    public String getInsurerEmail() {
        return insurerEmail;
    }

    public void setInsurerEmail(String insurerEmail) {
        this.insurerEmail = insurerEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getInsurerAddress() {
        return insurerAddress;
    }

    public void setInsurerAddress(String insurerAddress) {
        this.insurerAddress = insurerAddress;
    }

    public String getSecurityQuestion() {
        return securityQuestion;
    }

    public void setSecurityQuestion(String securityQuestion) {
        this.securityQuestion = securityQuestion;
    }

    public String getSecurityAnswer() {
        return securityAnswer;
    }

    public void setSecurityAnswer(String securityAnswer) {
        this.securityAnswer = securityAnswer;
    }

    public Set<Policy> getPolicies() {
        return policies;
    }

    public void setPolicies(Set<Policy> policies) {
        this.policies = policies;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}






