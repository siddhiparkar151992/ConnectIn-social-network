package com.connectin.authenticate.security.handlers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import com.connectin.authenticate.security.tokenmanager.service.TokenAuthenticationService;
import com.connectin.config.ApplicationConfig;

public class AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler{
	
	@Autowired
	private ApplicationConfig appConfig;
	
	@Autowired
	TokenAuthenticationService tokenService;
	
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		tokenService.addAuthentication(request, response, authentication);
		response.sendRedirect(appConfig.getHomeUrl());
		tokenService.addAuthentication(request, response, authentication);
	}

}
