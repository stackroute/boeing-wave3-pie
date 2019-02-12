package com.stackroute.pie.message.request;

import org.hibernate.annotations.NaturalId;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.Set;

public class SignUpForm {
    @NotBlank
    @Size(min=3, max = 50)
    private String insurerName;

    @NotBlank
    @Size(min=3, max = 50)
    private String insurerLicense;

    @NaturalId
    @NotBlank
    @Size(max = 50)
    @Email
    private String insurerEmail;

    @NotBlank
    @Size(min=6, max = 100)
    private String password;

    @NotBlank
    @Size(min=8)
    private String insurerSecurityQuestion;

    @NotBlank
    @Size(min=8)
    private String insurerSecurityAnswer;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date createdDate = new Date();

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date updateDate = new Date();

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    private Set<String> role;

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

    public String getInsurerSecurityQuestion() {
        return insurerSecurityQuestion;
    }

    public void setInsurerSecurityQuestion(String insurerSecurityQuestion) {
        this.insurerSecurityQuestion = insurerSecurityQuestion;
    }

    public String getInsurerSecurityAnswer() {
        return insurerSecurityAnswer;
    }

    public void setInsurerSecurityAnswer(String insurerSecurityAnswer) {
        this.insurerSecurityAnswer = insurerSecurityAnswer;
    }

    public Set<String> getRole() {
        return role;
    }

    public void setRole(Set<String> role) {
        this.role = role;
    }


}
