package com.talentale.authenticate.service;

import com.talentale.authenticate.entity.user.UserCredentials;
import com.talentale.authenticate.util.exceptions.InvalidCredentialsException;
import com.talentale.exceptions.account.AccountException;


public interface IAuthenticationService {
	public UserCredentials login(String username, String password) throws AccountException, InvalidCredentialsException;
}
