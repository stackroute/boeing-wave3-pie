package com.stackroute.pie.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Policy {


    private int policyid;
    private String insurerName;
    private String[] diseases;



    private int sumInsured;
    private int waitingPeriod;
    private int monthlyPremium;
    private int yearlyPremium;



}