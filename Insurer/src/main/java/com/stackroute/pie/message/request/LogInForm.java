package com.stackroute.pie.message.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LogInForm {
    @NotBlank
    @Size(min=3, max = 60)
    private String insurerLicense;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

}
