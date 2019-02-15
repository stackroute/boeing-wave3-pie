package com.stackroute.pie.recommendation.domain;

import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;
import java.util.List;

@NodeEntity
public class policy {

    @Id
//   private int id;

    public int policyId;
    public String policyName;
    List<String> gender;
    public String policyType;
    List<String> diseasesList;
    public int cashlessHospitals;
    public int waitingPeriod;
    public int monthlyPremium;
    public int yearlyPremium;
    public int sumInsured;
    public int minAge;
    public int maxAge;
    public String location;

    public String createdBy;
    public String updatedBy;



    public policy(int policyId, String policyName, List<String> gender, String policyType, List<String> diseasesList, int cashlessHospitals, int waitingPeriod, int monthlyPremium, int yearlyPremium, int sumInsured, int minAge, int maxAge, String location,   String createdBy, String updatedBy) {
        this.policyId = policyId;
        this.policyName = policyName;
        this.policyType = policyType;
        this.diseasesList = diseasesList;
        this.gender=gender;
        this.cashlessHospitals = cashlessHospitals;
        this.waitingPeriod = waitingPeriod;
        this.monthlyPremium = monthlyPremium;
        this.yearlyPremium = yearlyPremium;
        this.sumInsured = sumInsured;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.location = location;

        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
//        this.policies = policies;
    }

    public policy() {

    }



    @Relationship(type= "HAS_A_POLICY" ,direction=Relationship.INCOMING)
    private List<policy> policies;
    private List<policy>  getPolicies(){
        return policies;
    }

//    public policy(int policyId) {
//        this.policyId = policyId;
//    }


    public int getPolicyId() {
        return policyId;
    }

    public String getPolicyName() {
        return policyName;
    }

    public String getPolicyType() {
        return policyType;
    }

    public List<String> getDiseasesList() {
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

//    public Date getCreatedAt() {
//        return createdAt;
//    }
//
//    public Date getUpdatedAt() {
//        return updatedAt;
//    }

    public String getCreatedBy() {
        return createdBy;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public List<String> getGender() {
        return gender;
    }

//    public void setGender(List<String> gender) {
//        this.gender = gender;
//    }



    public void setPolicyId(int policyId) {
        this.policyId = policyId;
    }

    public void setPolicyName(String policyName) {
        this.policyName = policyName;
    }

    public void setGender(List<String> gender) {
        this.gender = gender;
    }

    public void setPolicyType(String policyType) {
        this.policyType = policyType;
    }

    public void setDiseasesList(List<String> diseasesList) {
        this.diseasesList = diseasesList;
    }

    public void setCashlessHospitals(int cashlessHospitals) {
        this.cashlessHospitals = cashlessHospitals;
    }

    public void setWaitingPeriod(int waitingPeriod) {
        this.waitingPeriod = waitingPeriod;
    }

    public void setMonthlyPremium(int monthlyPremium) {
        this.monthlyPremium = monthlyPremium;
    }

    public void setYearlyPremium(int yearlyPremium) {
        this.yearlyPremium = yearlyPremium;
    }

    public void setSumInsured(int sumInsured) {
        this.sumInsured = sumInsured;
    }

    public void setMinAge(int minAge) {
        this.minAge = minAge;
    }

    public void setMaxAge(int maxAge) {
        this.maxAge = maxAge;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }



    @Override
    public String toString() {
        return "policy{" +
                "policyId=" + policyId +
                ", policyName='" + policyName + '\'' +
                ", policyType='" + policyType + '\'' +
                ", diseasesList=" + diseasesList +
                ", cashlessHospitals=" + cashlessHospitals +
                ", waitingPeriod=" + waitingPeriod +
                ", monthlyPremium=" + monthlyPremium +
                ", yearlyPremium=" + yearlyPremium +
                ", sumInsured=" + sumInsured +
                ", minAge=" + minAge +
                ", maxAge=" + maxAge +
                ", location='" + location + '\'' +

                ", createdBy='" + createdBy + '\'' +
                ", updatedBy='" + updatedBy + '\'' +
                ", gender=" + gender +
                ", policies=" + policies +
                '}';
    }
}
