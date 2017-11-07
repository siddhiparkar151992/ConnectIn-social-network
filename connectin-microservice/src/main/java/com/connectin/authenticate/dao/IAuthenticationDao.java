package com.connectin.authenticate.dao;


import com.connectin.business.user.entity.UserCredentials;

public interface IAuthenticationDao{

    public UserCredentials login(String username, String password);
}
