package com.talentale.authenticate.security.tokenmanager.service;

import com.talentale.authenticate.entity.User;
import com.talentale.authenticate.security.tokenmanager.util.JwtUtil;

public class TokenHandler {
	
	JwtUtil jwtUtil= new JwtUtil();

	public User parseUserFromToken(String token) {
		return jwtUtil.parseToken(token);
	}

	public String createTokenForUser(User user) {
		return jwtUtil.generateToken(user);
	}

	
}
