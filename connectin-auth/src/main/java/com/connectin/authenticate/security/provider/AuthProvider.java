package com.connectin.authenticate.security.provider;

import com.connectin.authenticate.entity.Role;
import com.connectin.authenticate.entity.User;
import com.connectin.authenticate.entity.user.UserCred;
import com.connectin.authenticate.entity.user.UserCredentials;
import com.connectin.authenticate.security.tokenmanager.service.TokenHandler;
import com.connectin.authenticate.service.IAuthenticator;
import com.connectin.authenticate.util.exceptions.InvalidCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;


@Service("authProvider")
public class AuthProvider implements AuthenticationProvider {

    @Autowired
    private IAuthenticator authService;
    
    
    private TokenHandler tokenHandler = new TokenHandler();
    
    @Autowired
    private UserDetailsService userDetailsService;

    public HashMap<String, UserCredentials> authenticate(String id, String password) throws InvalidCredentialsException, Exception {
        return authService.login(new UserCred(id, password));
    }
    public String authenticateUser(String username, String password) throws AuthenticationException {

        try {
            HashMap<String, UserCredentials> userData = authenticate(username, password);
            UserDetails user = userDetailsService.loadUserByUsername(username);

            Collection<? extends GrantedAuthority> authorities = user.getAuthorities();
            String token = tokenHandler.createTokenForUser(
                    new User(username, (List<Role>) authorities));
            return token;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }


    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        System.out.println(username);
        String password = (String) authentication.getCredentials();
        System.out.println(password);

        try {
            HashMap<String, UserCredentials> userData = authenticate(username, password);
            UserDetails user = userDetailsService.loadUserByUsername(username);

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
