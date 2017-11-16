package com.connectin.business.user.connections.dao;

import com.connectin.business.user.entity.User;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

public interface IConnectionsDao {
    public List<User> getConnectionByUserId(String userName) throws ConnectinBaseException;
}
