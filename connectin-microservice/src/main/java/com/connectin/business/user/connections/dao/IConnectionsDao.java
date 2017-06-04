package com.connectin.business.user.connections.dao;

import java.util.List;

import com.connectin.business.user.entity.User;
import com.connectin.exceptions.ConnectinBaseException;

public interface IConnectionsDao {
	public List<User> getConnectionByUserId(int id) throws ConnectinBaseException;
}
