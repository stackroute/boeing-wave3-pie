package com.stackroute.pie.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

import java.util.List;

@NodeEntity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Policy {
    @Id
    private int policyId;
    private String insurerName;
    private String policyName;
    //private String policyType;
    private long minSumInsured;
    private long maxSumInsured;
    private int noOfCashLessHospitals;
    //private List<String> cashLessHospitals;
    private long monthlyPremium;
    private long yearlyPremium;
    //private List<String> diseasesCovered;
    private int minAge;
    private int maxAge;
    private int waitingPeriod;
   // List<Disease> diseasesList;
    //List<String> gender;
    // private Timestamp createdAt;
    //  private Timestamp updatedAt;
    //  private String createdBy;
    //  private String updatedBy;
}
