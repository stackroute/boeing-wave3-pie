package com.stackroute.settlement.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Document(collection = "pending_tasks")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PendingTasks {
    @Id
    private int pendingTasksId;

    private int insuredId;

    private int insurerId;

    @NotBlank
    @Size(min=3, max = 50)
    private String fullName;

    @NotBlank
    @UniqueElements
    @Size(min=3, max = 50)
    private String username;

    //    @NaturalId
    @UniqueElements
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    private Tasks pendingTasks[];
}
