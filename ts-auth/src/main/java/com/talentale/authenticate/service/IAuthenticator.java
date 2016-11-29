package com.talentale.authenticate.service;


import java.util.HashMap;

import com.talentale.authenticate.entity.user.UserCred;
import com.talentale.authenticate.entity.user.UserCredentials;
import com.talentale.authenticate.util.exceptions.InvalidCredentialsException;

public interface IAuthenticator {
	public HashMap<String, UserCredentials> login(UserCred userCreds) throws InvalidCredentialsException, Exception;
	public void logout(String username, String password);
	
}
