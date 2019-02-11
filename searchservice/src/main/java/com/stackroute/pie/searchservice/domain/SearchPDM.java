package com.stackroute.pie.searchservice.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "searchFrom")
@Data
public class SearchPDM {
    @Id
    public String policyName;
    public int count = 0;
    public String disease;
    public int minAge;
    public int maxAge;
    public int waitingPeriod;
    public int premium;
    public int sumInsured;
    public String policyType;
    public String location;
}
