package com.connectin.authenticate.service;


import com.connectin.authenticate.entity.user.UserCred;
import com.connectin.authenticate.util.exceptions.InvalidCredentialsException;
import com.connectin.business.user.entity.UserCredentials;

import java.util.HashMap;

public interface IAuthenticator {
    public HashMap<String, UserCredentials> login(UserCred userCreds) throws InvalidCredentialsException, Exception;

    public void logout(String username, String password);

}
