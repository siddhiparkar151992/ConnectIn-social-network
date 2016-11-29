package com.talentale.authenticate.dao;

import com.talentale.business.generic.dao.GenericDao;
import com.talentale.authenticate.entity.user.UserCredentials;



public interface IAuthenticationDao extends GenericDao<UserCredentials>{
	
	public UserCredentials login(String username, String password);
}
