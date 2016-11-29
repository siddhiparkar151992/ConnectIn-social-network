package com.connectin.authenticate.security.tokenmanager.service;



import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.connectin.authenticate.entity.Role;
import com.connectin.authenticate.entity.User;
import com.connectin.authenticate.security.userdetails.UserAuthentication;


@Service
public class TokenAuthenticationService {

	private static final String AUTH_HEADER_NAME = "X-AUTH-TOKEN";
	private static final long TEN_DAYS = 1000 * 60 * 60 * 24 * 10;
	
	private final TokenHandler tokenHandler = new TokenHandler();

	

	public void addAuthentication(HttpServletRequest request, HttpServletResponse response,Authentication authentication) {
		final Object user =  authentication.getDetails();
		response.setHeader(AUTH_HEADER_NAME, tokenHandler.createTokenForUser(
				new User(request.getParameter("username"),(List<Role>)authentication.getAuthorities())));
	}

	public Authentication getAuthentication(HttpServletRequest request) {
		final String token = request.getHeader(AUTH_HEADER_NAME);
		if (token != null) {
			final User user = tokenHandler.parseUserFromToken(token);
			if (user != null) {
				return new UserAuthentication(user);
			}
		}
		return null;
	}
}

