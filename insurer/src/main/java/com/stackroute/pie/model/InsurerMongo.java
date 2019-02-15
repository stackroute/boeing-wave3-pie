//package com.stackroute.pie.model;
//
//import com.fasterxml.jackson.annotation.JsonFormat;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import javax.validation.constraints.Email;
//import javax.validation.constraints.NotBlank;
//import javax.validation.constraints.Size;
//import java.util.Date;
//import java.util.HashSet;
//import java.util.Set;
//
//@Document(collection = "insurer")
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class InsurerMongo {
//    @Id
//    private Long insurerId;
//
//    @NotBlank
//    @Size(min=3, max = 50)
//    private String insurerName;
//
//    @NotBlank
//    @Size(min=3, max = 50)
//    private String insurerLicense;
//
//
//    @NotBlank
//    @Size(max = 50)
//    @Email
//    private String insurerEmail;
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    @NotBlank
//    @Size(min=6, max = 100)
//    private String password;
//
//    @JsonFormat(pattern = "dd-MM-yyyy")
//    private Date creationDate;
//
//    @JsonFormat(pattern = "dd-MM-yyyy")
//    private Date updateDate;
//
//    @NotBlank
//    @Size(min=8)
//    private String insurerSecurityQuestion;
//
//    @NotBlank
//    @Size(min=8)
//    private String insurerSecurityAnswer;
//
//    private Set<Role> roles = new HashSet<>();
//
//}