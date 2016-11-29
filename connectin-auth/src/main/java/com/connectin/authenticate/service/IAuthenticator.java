package com.connectin.authenticate.service;


import java.util.HashMap;

import com.connectin.authenticate.entity.user.UserCred;
import com.connectin.authenticate.entity.user.UserCredentials;
import com.connectin.authenticate.util.exceptions.InvalidCredentialsException;

public interface IAuthenticator {
	public HashMap<String, UserCredentials> login(UserCred userCreds) throws InvalidCredentialsException, Exception;
	public void logout(String username, String password);
	
}
