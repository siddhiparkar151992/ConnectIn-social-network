package com.connectin.business.account.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.context.annotation.ImportResource;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.domain.account.Account;
import com.connectin.domain.common.AccountAvailibility;

@Repository
@Transactional
public class AccountDaoImpl implements IAcountDao{
	
	
	
	@Override
	public Account getById(String id) {
		return null;
	}

	@Override
	public void update(Account t) {
		// TODO Auto-generated method stub

	}

	@Override
	public void delete(String id) {
		// TODO Auto-generated method stub

	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Account> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Account> filter(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Account> filter(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Account getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void checkAvailibility(Account account) {
		// TODO Auto-generated method stub

	}

	@Override
	public void changeAvailibility(AccountAvailibility availibility) {
		// TODO Auto-generated method stub

	}

}
