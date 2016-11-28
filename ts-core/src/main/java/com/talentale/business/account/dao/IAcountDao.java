package com.talentale.business.account.dao;

import com.talentale.business.generic.dao.GenericDao;
import com.talentale.domain.account.Account;
import com.talentale.domain.common.AccountAvailibility;

public interface IAcountDao extends GenericDao<Account>{
	public void checkAvailibility(Account account);
	public void changeAvailibility(AccountAvailibility availibility);
	
}
