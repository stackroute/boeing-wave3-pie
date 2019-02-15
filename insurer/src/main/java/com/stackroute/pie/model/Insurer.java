package com.stackroute.pie.model;

import org.hibernate.annotations.NaturalId;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Insurers", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "insurerLicense"
        }),
        @UniqueConstraint(columnNames = {
                "insurerEmail"
        })
})



public class Insurer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long insurerId;

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

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date creationDate = new Date();

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date updateDate = new Date();

    @Size(min=8)
    private String insurerSecurityQuestion;

    @Size(min=8)
    private String insurerSecurityAnswer;


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "insurer_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public Insurer(Long insurerId, @NotBlank @Size(min = 3, max = 50) String insurerName, @NotBlank @Size(min = 3, max = 50) String insurerLicense, @NotBlank @Size(max = 50) @Email String insurerEmail, @NotBlank @Size(min = 6, max = 100) String password, Date creationDate, Date updateDate, @NotBlank @Size(min = 8) String insurerSecurityQuestion, @NotBlank @Size(min = 8) String insurerSecurityAnswer, Set<Role> roles) {
        this.insurerId = insurerId;
        this.insurerName = insurerName;
        this.insurerLicense = insurerLicense;
        this.insurerEmail = insurerEmail;
        this.password = password;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
        this.insurerSecurityQuestion = insurerSecurityQuestion;
        this.insurerSecurityAnswer = insurerSecurityAnswer;
        this.roles = roles;
    }

    public Insurer() {
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

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
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


    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }



    public Insurer( String insurerName, String insurerLicense, String insurerEmail, String password, Date creationDate, Date updateDate, String insurerSecurityQuestion, String insurerSecurityAnswer) {
        this.insurerName = insurerName;
        this.insurerLicense = insurerLicense;
        this.insurerEmail = insurerEmail;
        this.password = password;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
        this.insurerSecurityQuestion = insurerSecurityQuestion;
        this.insurerSecurityAnswer = insurerSecurityAnswer;
    }

    @Override
    public String toString() {
        return "Insurer{" +
                "insurerId=" + insurerId +
                ", insurerName='" + insurerName + '\'' +
                ", insurerLicense='" + insurerLicense + '\'' +
                ", insurerEmail='" + insurerEmail + '\'' +
                ", password='" + password + '\'' +
                ", creationDate=" + creationDate +
                ", updateDate=" + updateDate +
                ", insurerSecurityQuestion='" + insurerSecurityQuestion + '\'' +
                ", insurerSecurityAnswer='" + insurerSecurityAnswer + '\'' +
                ", roles=" + roles +
                '}';
    }
}