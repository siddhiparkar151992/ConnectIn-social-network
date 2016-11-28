package com.talentale.web.authenticate.security;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Date;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.talentale.web.authenticate.service.User;

public class TokenHandler {
	
	JwtUtil jwtUtil= new JwtUtil();

	public User parseUserFromToken(String token) {
		return jwtUtil.parseToken(token);
	}

	public String createTokenForUser(User user) {
		return jwtUtil.generateToken(user);
	}

	
}
