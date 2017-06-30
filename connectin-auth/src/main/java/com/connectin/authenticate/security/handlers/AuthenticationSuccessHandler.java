package com.connectin.authenticate.security.handlers;

import com.connectin.authenticate.security.tokenmanager.service.TokenAuthenticationService;
import com.connectin.config.ApplicationConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Autowired
    TokenAuthenticationService tokenService;
    @Autowired
    private ApplicationConfig appConfig;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        tokenService.addAuthentication(request, response, authentication);
        response.sendRedirect(appConfig.getHomeUrl());
        tokenService.addAuthentication(request, response, authentication);
    }

}
