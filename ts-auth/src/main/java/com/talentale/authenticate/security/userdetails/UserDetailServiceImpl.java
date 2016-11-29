package com.talentale.authenticate.security.userdetails;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.talentale.authenticate.entity.Role;
import com.talentale.authenticate.entity.User;
import com.talentale.authenticate.entity.user.UserCred;
import com.talentale.authenticate.entity.user.UserCredentials;
import com.talentale.authenticate.service.IAuthenticator;
import com.talentale.authenticate.util.exceptions.InvalidCredentialsException;




@Service
public class UserDetailServiceImpl implements UserDetailsService {
	
	@Autowired
	private IAuthenticator authService;
	
	
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		User user = null;
        Role r = new Role();
        r.setName("ROLE_USER");
        List<Role> roles = new ArrayList<Role>();
        roles.add(r);
        user = new User(roles);
        return user;
        
	}
	
	public HashMap<String,UserCredentials> authenticate(String id, String password) throws InvalidCredentialsException, Exception{
		return  authService.login(new UserCred(id, password));
	}
}
