package com.stackroute.pie.message.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpForm {
    @NotBlank
    @Size(min = 3, max = 50)

    private String insurerName;

    @NotBlank
    @Size(min = 3, max = 50)
    private String insurerLicense;

    @NotBlank
    @Size(max = 60)
    @Email
    private String insurerEmail;

    private Set<String> role;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    public String getSecurityQuestion() {
        return securityQuestion;
    }

    public void setSecurityQuestion(String securityQuestion) {
        this.securityQuestion = securityQuestion;
    }

    public String getSecurityAnswer() {
        return securityAnswer;
    }

    public void setSecurityAnswer(String securityAnswer) {
        this.securityAnswer = securityAnswer;
    }

    public String getInsurerAddress() {
        return insurerAddress;
    }

    public void setInsurerAddress(String insurerAddress) {
        this.insurerAddress = insurerAddress;
    }

    @Size(min = 6, max = 40)
    private String securityQuestion;

    @Size(min = 6, max = 40)
    private String securityAnswer;

    @Size(min = 6, max = 50)
    private String insurerAddress;
}

