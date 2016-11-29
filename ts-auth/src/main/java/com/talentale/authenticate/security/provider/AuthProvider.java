package com.talentale.authenticate.security.provider;

import java.util.Collection;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.talentale.authenticate.entity.user.UserCredentials;
import com.talentale.authenticate.security.userdetails.UserDetailServiceImpl;

 
@Component
public class AuthProvider implements AuthenticationProvider{
 
	
	@Autowired
	UserDetailServiceImpl loginService;
	
	
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
          String username = authentication.getName();
          System.out.println(username);
          String password = (String) authentication.getCredentials();
          System.out.println(password);
          
          try {
        	  HashMap<String,UserCredentials> userData =loginService.authenticate(username, password);
			 UserDetails user =loginService.loadUserByUsername(username);
			 
	          Collection<? extends GrantedAuthority> authorities = user.getAuthorities();
	          return new UsernamePasswordAuthenticationToken(user, password, authorities);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
         
    }
 
    public boolean supports(Class<?> arg0) {
        return true;
    }
 
}
