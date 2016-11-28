package com.talentale.business.authentication.dao;

import com.talentale.business.generic.dao.GenericDao;
import com.talentale.business.user.entity.UserCredentials;
import com.talentale.domain.user.UserCred;



public interface IAuthenticationDao extends GenericDao<UserCredentials>{
	
	public UserCredentials login(String username, String password);
}
