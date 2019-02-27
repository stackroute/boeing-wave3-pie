package com.stackroute.pie.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;
import org.springframework.format.annotation.DateTimeFormat;

//import javax.management.relation.Role;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.*;

@NodeEntity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Insured {
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Relationship(type="VIEWED_POLICY")
    @Id

    private int insuredId;

    @NotBlank
    @Size(min=3, max = 50)
    private String fullName;

    @NotBlank
    @UniqueElements
    @Size(min=3, max = 50)
    private String username;

    //    @NaturalId
    @UniqueElements
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;



    //    @Transactional
    @NotBlank
    @Size(min=6, max = 100)
    private String password;

    private int age;


    @NotBlank
    private  String gender;

    //private String existingDisease;


    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date createdDate = new Date();



    private Set<Role> roles = new HashSet<>();



    private Set<Policy> policies =new HashSet<>();


    @NotBlank
    private String securityAnswer;

    private  String existingDisease;

    private int numberOfDependants;


    private List<FamilyMembers> familyMembers ;

    public Insured(int insuredId,String fullName, String username, String email, String password, String gender,  String securityAnswer,int age,String existingDisease,List<FamilyMembers> familyMembers,int numberOfDependants) {
        this.insuredId=insuredId;
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.gender= gender;
        //this.createdDate=createdDate;
        this.securityAnswer=securityAnswer;
        this.age=age;
        this.existingDisease=existingDisease;
        this.numberOfDependants=numberOfDependants;
    }





}






