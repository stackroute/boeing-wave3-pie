package com.stackroute.pie.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

//@NodeEntity
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//public class Policy {
//    @Relationship(type= "HAS_A_POLICY_IN" ,direction=Relationship.INCOMING)
//
//    @Id
//    private int policyId;
//    @NotBlank
//    private String insurerName;
//    @NotBlank
//    @UniqueElements
//    private String policyName;
//    @NotBlank
//    private long minSumInsured;
//    @NotBlank
//    private long maxSumInsured;
//    private int noOfCashLessHospitals;
//    @NotBlank
//    private int minAge;
//    @NotBlank
//    private int maxAge;
//    @NotBlank
//    private int waitingPeriod;
//    private String gender;
//    private String policyType;
//    private List<String> diseases = new ArrayList<>();
//
//}

@Data
@AllArgsConstructor
@NoArgsConstructor
@NodeEntity
public class Policy {
    @Relationship(type= "HAS_A_POLICY_IN" ,direction=Relationship.INCOMING)

    @GraphId
    private long policyId;
    @UniqueElements
    private String uniqueId;
    @NotBlank
    private String insurerName;
    @NotBlank
    private String insurerLicense;
    @NotBlank
    private String policyName;
    @NotBlank

    @NotBlank
    private int minAge;

    private int maxAge;
    private String policyType;
    private String genderAvail;
    private int waitingPeriod;
    private int policyTerm;
    private int minimumPremium;
    private int sumInsured;
    private String policyDescription;
    private List<String> diseasesCovered=new ArrayList<>();
    private List<String> cashlessHospitals = new ArrayList<>();
    private List<String> termsAndConditions = new ArrayList<>();
    private List<String> insuredList = new ArrayList<>();
    private List<String> paymentList = new ArrayList<>();


    //Custom Constructor for adding new policy
//    public Policy( String insurerName, String insurerLicense, String policyName, int policyId, int minAge, int maxAge,
//                   int minimumPremium, int sumInsured, String policyDescription) {
//        this.uniqueId = insurerName + policyName;
//        this.insurerName = insurerName;
//        this.policyName = policyName;
//        this.policyId = policyId;
//        this.minAge = minAge;
//        this.maxAge = maxAge;
//        this.minimumPremium = minimumPremium;
//        this.sumInsured = sumInsured;
//        this.insurerLicense = insurerLicense;
//        this.policyDescription = policyDescription;
//    }



}

