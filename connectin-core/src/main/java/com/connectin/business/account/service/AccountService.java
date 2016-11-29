package com.connectin.business.account.service;

import com.connectin.domain.account.Account;
import com.connectin.exceptions.account.AccountException;

public interface AccountService {
	public Account getAccount(String userId, String sessionId, String hashToken) throws AccountException;
	public void createAccount(Account account);
	public void updateAccount(Account account);
	public void exists(String accountId);
}
