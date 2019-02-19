package com.stackroute.pie.message.response;


import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private String insurerName;
    private Collection<? extends GrantedAuthority> authorities;

    public JwtResponse(String accessToken, String insurerName, Collection<? extends GrantedAuthority> authorities) {
        this.token = accessToken;
        this.insurerName = insurerName;
        this.authorities = authorities;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public String getInsurerName() {
        return insurerName;
    }

    public void setInsurerName(String insurerName) {
        this.insurerName = insurerName;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }
}
