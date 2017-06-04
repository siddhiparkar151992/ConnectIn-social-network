package com.connectin.authenticate.dao;

import com.connectin.business.generic.dao.GenericDao;
import com.connectin.authenticate.entity.user.UserCredentials;



public interface IAuthenticationDao extends GenericDao<UserCredentials>{
	
	public UserCredentials login(String username, String password);
}
