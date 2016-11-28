package com.talentale.business.account.service;

import com.talentale.domain.account.Account;
import com.talentale.exceptions.account.AccountException;

public interface AccountService {
	public Account getAccount(String userId, String sessionId, String hashToken) throws AccountException;
	public void createAccount(Account account);
	public void updateAccount(Account account);
	public void exists(String accountId);
}
