package com.talentale.business.authentication.service;

import java.util.HashMap;

import com.talentale.business.user.entity.UserCredentials;
import com.talentale.exceptions.account.AccountException;
import com.talentale.exceptions.auth.InvalidCredentialsException;

public interface IAuthenticationService {
	public UserCredentials login(String username, String password) throws AccountException, InvalidCredentialsException;
}
