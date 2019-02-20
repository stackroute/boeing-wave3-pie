package com.stackroute.settlement.domain;

import jdk.jfr.BooleanFlag;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tasks {
    private String taskName;
    private String taskDescription;
    private Boolean taskStatus;
    @DateTimeFormat
    private DateTimeFormat dueDate;
}
