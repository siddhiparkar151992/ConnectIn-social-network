package com.talentale.business.account.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.talentale.business.account.dao.IAcountDao;
import com.talentale.domain.account.Account;
import com.talentale.exceptions.account.AccountException;

@Service
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	IAcountDao accountDao;
	
	
	@Override
	public Account getAccount(String userId, String sessionId, String hashToken) throws AccountException {
		return null;
		/*if (stringUtil.isvalid(userId) && stringUtil.isvalid(sessionId)
				&& stringUtil.isvalid(hashToken)) {

			Account account = accountDao.getById(userId);
			if (objectUtil.isvalidObject(account, Account.class)) {
				return account;
			} else {
				throw new AccountException(
						"failed to load an account for a user!");
			}
		} else {
			throw new InvalidParameterException("");
		}*/

	}

	@Override
	public void createAccount(Account account) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateAccount(Account account) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void exists(String accountId) {
		// TODO Auto-generated method stub
		
	}
	
}
