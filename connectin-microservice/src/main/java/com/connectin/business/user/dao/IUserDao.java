package com.connectin.business.user.dao;

import java.util.Date;

import com.connectin.business.user.entity.User;
import com.connectin.exceptions.ConnectinBaseException;

public interface IUserDao {
	public User getByName(String userName) throws ConnectinBaseException;
	public void insertUserAuthenticationDetails(String userName, String password, Date lastLoggedIn, int userId) throws ConnectinBaseException;
}
