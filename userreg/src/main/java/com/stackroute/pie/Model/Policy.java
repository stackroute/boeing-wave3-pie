package com.stackroute.pie.Model;


public class Policy {


    private int policyid;
    private String insurerName;
    private String[] diseases;



    private int sumInsured;
    private int waitingPeriod;
    private int monthlyPremium;
    private int yearlyPremium;


    public int getPolicyid() {
        return policyid;
    }

    public void setPolicyid(int policyid) {
        this.policyid = policyid;
    }

    public String getInsurerName() {
        return insurerName;
    }

    public void setInsurerName(String insurerName) {
        this.insurerName = insurerName;
    }

    public String[] getDiseases() {
        return diseases;
    }

    public void setDiseases(String[] diseases) {
        this.diseases = diseases;
    }

    public int getSumInsured() {
        return sumInsured;
    }

    public void setSumInsured(int sumInsured) {
        this.sumInsured = sumInsured;
    }

    public int getWaitingPeriod() {
        return waitingPeriod;
    }

    public void setWaitingPeriod(int waitingPeriod) {
        this.waitingPeriod = waitingPeriod;
    }

    public int getMonthlyPremium() {
        return monthlyPremium;
    }

    public void setMonthlyPremium(int monthlyPremium) {
        this.monthlyPremium = monthlyPremium;
    }

    public int getYearlyPremium() {
        return yearlyPremium;
    }

    public void setYearlyPremium(int yearlyPremium) {
        this.yearlyPremium = yearlyPremium;
    }

}