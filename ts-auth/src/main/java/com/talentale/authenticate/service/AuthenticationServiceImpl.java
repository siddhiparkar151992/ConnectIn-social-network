package com.talentale.authenticate.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.talentale.authenticate.dao.IAuthenticationDao;
import com.talentale.authenticate.entity.AuthErrors;
import com.talentale.authenticate.entity.user.UserCredentials;
import com.talentale.authenticate.util.exceptions.InvalidCredentialsException;
import com.talentale.exceptions.account.AccountException;
import com.talentale.utils.ObjectUtil;
import com.talentale.utils.StringUtil;

@Service
public class AuthenticationServiceImpl implements IAuthenticationService {
	
	@Autowired
	IAuthenticationDao authDao;
	
	@Autowired
	StringUtil stringUtil;
	
	@Autowired
	ObjectUtil objectUtil;

	@Override
	public UserCredentials login(String username, String password) throws AccountException, InvalidCredentialsException {
		UserCredentials userCreds = null;
		if(!stringUtil.isBlank(username) && !stringUtil.isBlank(password)){
			userCreds= authDao.login(username, password);
			if(userCreds==null){
				throw new InvalidCredentialsException(AuthErrors.INVALID_USER_CREDS);
			}
		}
		else{
			throw new InvalidCredentialsException(AuthErrors.INVALID_USER_CREDS);
		}
			
		return userCreds;
		
	}

}
