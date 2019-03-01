package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

//Pojo object for storing the policies
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "policylist")
public class Policy {
    @Id
    @UniqueElements
    private String uniqueId;
    @NotBlank
    private String insurerName;
    @NotBlank
    private String insurerLicense;
    @NotBlank
    private String policyName;
    @NotBlank
    private int policyId;
    @NotBlank
    private int minAge;
    @NotBlank
    private int maxAge;
    private String policyType;
    private String genderAvail;
    private int waitingPeriod;
    private int policyTerm;
    private int minimumPremium;
    private int sumInsured;
    private String policyDescription;
    private List<String> diseasesCovered = new ArrayList<>();
    private List<String> cashlessHospitals = new ArrayList<>();
    private List<String> termsAndConditions = new ArrayList<>();
    private List<String> insuredList = new ArrayList<>();
    private List<String> paymentList = new ArrayList<>();


    //Custom Constructor for adding new policy
    public Policy( String insurerName, String insurerLicense, String policyName, int policyId, int minAge, int maxAge,
                  int minimumPremium, int sumInsured, String policyDescription) {
        this.uniqueId = insurerName + policyName;
        this.insurerName = insurerName;
        this.policyName = policyName;
        this.policyId = policyId;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.minimumPremium = minimumPremium;
        this.sumInsured = sumInsured;
        this.insurerLicense = insurerLicense;
        this.policyDescription = policyDescription;
    }
}
