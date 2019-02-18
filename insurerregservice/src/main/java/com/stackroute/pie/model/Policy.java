package com.stackroute.pie.model;


//import org.hibernate.annotations.NaturalId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.mongodb.core.mapping.Document;

//import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Document(collection="insurancelist")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Policy {
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
    // private Timestamp createdAt;
    //  private Timestamp updatedAt;
    //  private String createdBy;
    //  private String updatedBy;
}
