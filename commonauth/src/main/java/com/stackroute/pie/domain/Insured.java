package com.stackroute.pie.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class Insured {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int insuredId;


//    @NotBlank
//    @Size(min=3, max = 50)
    private String name;

//    @NotBlank
//    @Size(min=3, max = 50)
    private String username;

//    @NaturalId
//    @NotBlank
//    @Size(max = 50)
//    @Email
    private String email;

//    @NotBlank
//    @Size(min=6, max = 100)
    private String password;


//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "user_roles",
//            joinColumns = @JoinColumn(name = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();



    public Insured(String name, String username, String email, String password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }



    @Override
    public String toString() {
        return "Insured{" +
                "insuredid=" + insuredId +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                '}';
    }
}



