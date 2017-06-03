package com.connectin.authenticate.dao;

import com.connectin.authenticate.entity.user.UserCredentials;



public interface IAuthenticationDao{
	
	public UserCredentials login(String username, String password);
}
