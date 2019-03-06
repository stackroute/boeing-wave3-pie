package com.stackroute.pie.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "ChatbotPolicy")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PolicyList {

    public long policyId;
    private String policyName;
    private String insurerName;
    private String policyType;
    private String insurerLicense;
    private int policyTerm;
    private List<String> diseasesCovered;
    private List<String> cashlessHospitals;
    private int waitingPeriod;
    private String genderAvail;
    private String uniqueId;
    private String policyDescription;
    //    public int monthlyPremium;
//    public int yearlyPremium;
    private long minSumInsured;
    private long maxSumInsured;
    private List<String> insuredList;
    private int minAge;
    private int maxAge;
    private List<String> termsAndConditions;
    private List<String> paymentList;
}
