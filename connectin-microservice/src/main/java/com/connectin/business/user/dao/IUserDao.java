package com.connectin.business.user.dao;

import com.connectin.business.generic.dao.DataAccessor;
import com.connectin.business.user.entity.User;
import com.connectin.exceptions.ConnectinBaseException;

public interface IUserDao {
	public User getByName(String userName) throws ConnectinBaseException;
}
