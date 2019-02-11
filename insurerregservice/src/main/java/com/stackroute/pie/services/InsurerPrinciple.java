package com.stackroute.pie.services;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.stackroute.pie.model.Insurer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class InsurerPrinciple implements UserDetails {

    private static final long serialVersionUID = 1L;

    private Long insurerId;

    private String insurerName;

    private String insurerLicense;

    private String insurerEmail;

    @JsonIgnore
    private String password;




    private Collection<? extends GrantedAuthority> authorities;

    public InsurerPrinciple(Long insurerId, String insurerName,
                            String insurerLicense, String insurerEmail, String password,
                            Collection<? extends GrantedAuthority> authorities) {
        this.insurerId = insurerId;
        this.insurerName = insurerName;
        this.insurerLicense = insurerLicense;
        this.insurerEmail = insurerEmail;
        this.password = password;
        this.authorities = authorities;
    }

    public static InsurerPrinciple build(Insurer insurer) {
        List<GrantedAuthority> authorities = insurer.getRoles().stream().map(role ->
                new SimpleGrantedAuthority(role.getName().name())
        ).collect(Collectors.toList());

        return new InsurerPrinciple(
                insurer.getInsurerId(),
                insurer.getInsurerName(),
                insurer.getInsurerLicense(),
                insurer.getInsurerEmail(),
                insurer.getPassword(),
                authorities
        );
    }
    public Long getInsurerId() {
        return insurerId;
    }
    public String getInsurerName() {
        return insurerName;
    }

    public String getInsurerEmail() {
        return insurerEmail;
    }

    @Override
    public String getUsername() {
        return insurerLicense;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        InsurerPrinciple user = (InsurerPrinciple) o;
        return Objects.equals(insurerId, user.insurerId);
    }
}