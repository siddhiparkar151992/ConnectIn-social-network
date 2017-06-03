package com.connectin.business.account.dao;

import com.connectin.business.generic.dao.GenericDao;
import com.connectin.domain.account.Account;
import com.connectin.domain.common.AccountAvailibility;

public interface IAcountDao extends GenericDao<Account>{
	public void checkAvailibility(Account account);
	public void changeAvailibility(AccountAvailibility availibility);
	
}
