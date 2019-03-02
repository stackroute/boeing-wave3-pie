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
    private List<String> diseases = new ArrayList<>();

}
