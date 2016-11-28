package com.talentale.web.authenticate.service;


import java.util.HashMap;

import com.talentale.business.user.entity.UserCredentials;
import com.talentale.domain.user.UserCred;
import com.talentale.exceptions.auth.InvalidCredentialsException;

public interface IAuthenticator {
	public HashMap<String, UserCredentials> login(UserCred userCreds) throws InvalidCredentialsException, Exception;
	public void logout(String username, String password);
	
}
