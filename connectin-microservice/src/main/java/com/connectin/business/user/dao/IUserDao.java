package com.connectin.business.user.dao;

import com.connectin.business.user.entity.User;
import com.connectin.exceptions.ConnectinBaseException;

public interface IUserDao {
    public User getByName(String userName) throws ConnectinBaseException;

    public void insertUserAuthenticationDetails(String userName, String password, int userId) throws ConnectinBaseException;
}
