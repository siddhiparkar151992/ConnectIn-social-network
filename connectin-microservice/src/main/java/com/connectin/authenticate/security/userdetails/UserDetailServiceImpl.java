package com.connectin.authenticate.security.userdetails;

import com.connectin.authenticate.entity.Role;
import com.connectin.authenticate.entity.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service("userDetailsService")
public class UserDetailServiceImpl implements UserDetailsService {


    public UserDetails loadUserByUsername(String uname) throws UsernameNotFoundException {
        User user = null;
        Role r = new Role();
        r.setName("ROLE_USER");
        List<Role> roles = new ArrayList<Role>();
        roles.add(r);
        user = new User(roles);
        user.setUsername(uname);
        return user;

    }

}
