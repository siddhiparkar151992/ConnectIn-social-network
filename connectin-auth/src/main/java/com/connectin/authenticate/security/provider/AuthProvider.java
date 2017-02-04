package com.connectin.authenticate.security.provider;

import java.util.Collection;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.connectin.authenticate.entity.user.UserCred;
import com.connectin.authenticate.entity.user.UserCredentials;
import com.connectin.authenticate.security.userdetails.UserDetailServiceImpl;
import com.connectin.authenticate.service.IAuthenticator;
import com.connectin.authenticate.util.exceptions.InvalidCredentialsException;

 
@Service
public class AuthProvider implements AuthenticationProvider{
 
	@Autowired
	private IAuthenticator authService;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	public HashMap<String,UserCredentials> authenticate(String id, String password) throws InvalidCredentialsException, Exception{
		return  authService.login(new UserCred(id, password));
	}
	
	
	
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
          String username = authentication.getName();
          System.out.println(username);
          String password = (String) authentication.getCredentials();
          System.out.println(password);
          
          try {
        	  HashMap<String,UserCredentials> userData =authenticate(username, password);
			 UserDetails user =userDetailsService.loadUserByUsername(username);
			 
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
