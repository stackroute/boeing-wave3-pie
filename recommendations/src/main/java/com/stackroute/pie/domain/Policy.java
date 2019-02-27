package com.stackroute.pie.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@NodeEntity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Policy {
    @Relationship(type= "HAS_A_POLICY_IN" ,direction=Relationship.INCOMING)

    @Id
//    private int policyId;
//
//    private String policyInsurerName;
//
//    private String policyName;
//   List <String> policyType;
//    private long minSumInsured;
//    private long maxSumInsured;
//    private int noOfCashLessHospitals;
//    private long monthlyPremium;
//    private long yearlyPremium;
//    private List<String> diseasesCovered;
//    private int minAge;
//    private int maxAge;
//    private int waitingPeriod;
//   //List<Disease> diseasesList;
//
////     private Timestamp createdAt;
////      private Timestamp updatedAt;
//      private String createdBy;
//      private String updatedBy;
//    private List<String> gender;


    private int policyId;
    @NotBlank
    private String insurerName;
    @NotBlank
    @UniqueElements
    private String policyName;
    @NotBlank
    private long minSumInsured;
    @NotBlank
    private long maxSumInsured;
    private int noOfCashLessHospitals;
    @NotBlank
    private int minAge;
    @NotBlank
    private int maxAge;
    @NotBlank
    private int waitingPeriod;
    private String gender;
    private String policyType;
    //private List<String> insuredList = new ArrayList<>();
    private List<String> diseases = new ArrayList<>();

}
