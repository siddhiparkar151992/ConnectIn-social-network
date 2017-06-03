package com.connectin.business.account.dao;

import com.connectin.business.account.entity.Account;
import com.connectin.business.generic.dao.DataAccessor;
import com.connectin.common.domain.AccountAvailibility;
import com.connectin.exceptions.ConnectinBaseException;

public interface IAccountDao{
	public void checkAvailibility(Account account);
	public void changeAvailibility(AccountAvailibility availibility);
	public Account getAccountById(int id) throws ConnectinBaseException;
}
