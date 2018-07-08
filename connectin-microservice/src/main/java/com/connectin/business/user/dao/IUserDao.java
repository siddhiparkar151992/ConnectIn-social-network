package com.connectin.business.user.dao;

import com.connectin.business.user.entity.User;
import com.connectin.exceptions.ConnectinBaseException;

public interface IUserDao {
    User getByName(String userName) throws ConnectinBaseException;
    User getById(int id) throws ConnectinBaseException;
    void insertUserAuthenticationDetails(String userName, String password, int userId) throws ConnectinBaseException;
}
