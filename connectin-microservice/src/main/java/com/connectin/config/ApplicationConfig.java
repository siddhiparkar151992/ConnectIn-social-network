package com.connectin.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {
    @Value("${Application.Security.Secret}")
    private String secret;

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public Long getExpiration() {
        return Long.valueOf(expiration);
    }

    public void setExpiration(Long expiration) {
        this.expiration = expiration;
    }

    @Value("${Application.Security.Expiration}")
    private Long expiration;

    @Value("${Application.BaseUrl.Home}")
    private String homeUrl;
    @Value("${Application.BaseUrl}")
    private String baseUrl;

    public String getHomeUrl() {
        return homeUrl;
    }

    public void setHomeUrl(String homeUrl) {
        this.homeUrl = homeUrl;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

}
