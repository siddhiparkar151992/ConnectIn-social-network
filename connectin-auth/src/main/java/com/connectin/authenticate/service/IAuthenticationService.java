package com.connectin.authenticate.service;

import com.connectin.authenticate.entity.user.UserCredentials;
import com.connectin.authenticate.util.exceptions.InvalidCredentialsException;
import com.connectin.exceptions.account.AccountException;


public interface IAuthenticationService {
	public UserCredentials login(String username, String password) throws AccountException, InvalidCredentialsException;
}
