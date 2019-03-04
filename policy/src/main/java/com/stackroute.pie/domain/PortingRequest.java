package com.stackroute.pie.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "portingrequest")
public class PortingRequest {
    private int portingRequestId;
    //    List<Field> formFields = new ArrayList<>();
    @NotBlank
    private String insuredName;
    @NotBlank
    private String insurerName;
    //    @NotBlank
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date dateOfBirth;
    @NotBlank
    private String insuredAddress;
    @NotBlank
    private String insurerProduct;
    @NotBlank
    private int sumInsured;
    @NotBlank
    private int cumulativeBonus;
    @NotBlank
    private String addOns;
    @NotBlank
    private long policyNumber;
    @NotBlank
    private String newInsurerName;
    @NotBlank
    private String newInsurerProduct;
    @NotBlank
    private int newSumInsured;
    @NotBlank
    private int newCumulativeBonus;
    @NotBlank
    private String reasonForPortability;
    private int familyMembers;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date createDate = new Date();
    @NotBlank
    private boolean exclusionPeriod;
    private int fromApproval;
    private int toApproval;


    @DateTimeFormat
    private Date acceptedDateofPreviousInsurer;
    //custom constructor for testing as date format cannot be recognised
    public PortingRequest(int portingRequestId, @NotBlank String insuredName, @NotBlank String insurerName, @NotBlank String insuredAddress, @NotBlank String insurerProduct, @NotBlank int sumInsured, @NotBlank int cumulativeBonus, @NotBlank String addOns, @NotBlank int policyNumber, @NotBlank String newInsurerName, @NotBlank String newInsurerProduct, @NotBlank int newSumInsured, @NotBlank int newCumulativeBonus, @NotBlank String reasonForPortability, int familyMembers, @NotBlank boolean exclusionPeriod, int fromApproval, int toApproval) {
        this.portingRequestId = portingRequestId;
        this.insuredName = insuredName;
        this.insurerName = insurerName;
        this.insuredAddress = insuredAddress;
        this.insurerProduct = insurerProduct;
        this.sumInsured = sumInsured;
        this.cumulativeBonus = cumulativeBonus;
        this.addOns = addOns;
        this.policyNumber = policyNumber;
        this.newInsurerName = newInsurerName;
        this.newInsurerProduct = newInsurerProduct;
        this.newSumInsured = newSumInsured;
        this.newCumulativeBonus = newCumulativeBonus;
        this.reasonForPortability = reasonForPortability;
        this.familyMembers = familyMembers;
        this.exclusionPeriod = exclusionPeriod;
        this.fromApproval = fromApproval;
        this.toApproval = toApproval;
    }
}
