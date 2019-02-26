package com.stackroute.pie.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FamilyMembers {
    private  String memberName;
    private int memberAge;
    private String relation;
    private String memberGender;
}
