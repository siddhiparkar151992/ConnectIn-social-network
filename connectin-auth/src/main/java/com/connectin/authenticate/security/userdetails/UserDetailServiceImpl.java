package com.connectin.authenticate.security.userdetails;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.connectin.authenticate.entity.Role;
import com.connectin.authenticate.entity.User;
import com.connectin.authenticate.entity.user.UserCred;
import com.connectin.authenticate.entity.user.UserCredentials;
import com.connectin.authenticate.service.AuthenticationManager;
import com.connectin.authenticate.service.IAuthenticator;
import com.connectin.authenticate.util.exceptions.InvalidCredentialsException;




@Service("userDetailsService")
public class UserDetailServiceImpl implements UserDetailsService {
	
	
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		User user = null;
        Role r = new Role();
        r.setName("ROLE_USER");
        List<Role> roles = new ArrayList<Role>();
        roles.add(r);
        user = new User(roles);
        return user;
        
	}

}
