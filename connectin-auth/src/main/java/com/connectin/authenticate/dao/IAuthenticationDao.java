package com.connectin.authenticate.dao;

import com.connectin.authenticate.entity.user.UserCredentials;
import com.connectin.business.generic.dao.GenericDao;


public interface IAuthenticationDao extends GenericDao<UserCredentials> {

    public UserCredentials login(String username, String password);
}
