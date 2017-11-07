package com.connectin.authenticate.security.tokenmanager.service;

import com.connectin.authenticate.entity.User;
import com.connectin.authenticate.security.tokenmanager.util.JwtUtil;

public class TokenHandler {
    JwtUtil jwtUtil = new JwtUtil();

    public boolean isValid(String token){
        return jwtUtil.validateToken(token);
    }
    public User parseUserFromToken(String token) {
        return jwtUtil.parseToken(token);
    }
    public boolean isTokenExpired(String token){
        return jwtUtil.isTokenExpired(token);
    }
    public String createTokenForUser(User user) {
        return jwtUtil.generateToken(user);
    }


}
