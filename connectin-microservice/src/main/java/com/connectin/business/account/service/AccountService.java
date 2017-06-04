package com.connectin.business.account.service;

import com.connectin.business.account.entity.Account;
import com.connectin.exceptions.account.AccountException;
import com.connectin.utils.Response;

public interface AccountService {
	public Response<Account> getAccount(int userId, String hashToken);
	public void createAccount(Account account);
	public void updateAccount(Account account);
	public void exists(String accountId);
}
