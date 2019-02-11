package com.stackroute.pie.recommendation.domain;

import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.Date;
import java.util.List;
@NodeEntity
public class policy {

@Id


    private int policyId;
    public String policyName;
    public String policyType;
    List<disease> diseasesList;
    public int cashlessHospitals;
    public int waitingPeriod;
    public int monthlyPremium;
    public int yearlyPremium;
    public int sumInsured;
    public int minAge;
    public int maxAge;
    public String location;
    public Date createdAt;
    public Date updatedAt;
    public String createdBy;
    public String updatedBy;

    public policy(int policyId, String policyName, String policyType, List<disease> diseasesList, int cashlessHospitals, int waitingPeriod, int monthlyPremium, int yearlyPremium, int sumInsured, int minAge, int maxAge, String location, Date createdAt, Date updatedAt, String createdBy, String updatedBy, List<policy> policies) {
        this.policyId = policyId;
        this.policyName = policyName;
        this.policyType = policyType;
        this.diseasesList = diseasesList;
        this.cashlessHospitals = cashlessHospitals;
        this.waitingPeriod = waitingPeriod;
        this.monthlyPremium = monthlyPremium;
        this.yearlyPremium = yearlyPremium;
        this.sumInsured = sumInsured;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.location = location;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.policies = policies;
    }

    public policy() {
    }

    @Relationship(type= "HAS_A_POLICY" ,direction=Relationship.INCOMING)
    private List<policy> policies;
    private List<policy>  getPolicies(){
        return policies;
    }

    public policy(int policyId) {
        this.policyId = policyId;
    }


    public int getPolicyId() {
        return policyId;
    }

    public String getPolicyName() {
        return policyName;
    }

    public String getPolicyType() {
        return policyType;
    }

    public List<disease> getDiseasesList() {
        return diseasesList;
    }

    public int getCashlessHospitals() {
        return cashlessHospitals;
    }

    public int getWaitingPeriod() {
        return waitingPeriod;
    }

    public int getMonthlyPremium() {
        return monthlyPremium;
    }

    public int getYearlyPremium() {
        return yearlyPremium;
    }

    public int getSumInsured() {
        return sumInsured;
    }

    public int getMinAge() {
        return minAge;
    }

    public int getMaxAge() {
        return maxAge;
    }

    public String getLocation() {
        return location;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }
}
