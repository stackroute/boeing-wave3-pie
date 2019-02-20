package com.stackroute.pie.domain;


//import org.hibernate.annotations.NaturalId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

//import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.*;

@Document(collection="usersname")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Insured {
//    @GeneratedValue(strategy = GenerationType.IDENTITY)

//    @Id
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


    @NotBlank
    private  String gender;


    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date createdDate = new Date();



    private Set<Role> roles = new HashSet<>();



    private Set<Policy> policies =new HashSet<>();

    private List<Request> requests= new ArrayList<>();


    public Insured(int insuredId, List<Request> requests) {
        this.insuredId = insuredId;
        this.requests = requests;
    }


    @NotBlank
    private String securityAnswer;



    public Insured(String fullName, String username, String email, String password, String gender, Date createdDate, String securityAnswer) {
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.gender= gender;
        this.createdDate=createdDate;
        this.securityAnswer=securityAnswer;
    }





}





