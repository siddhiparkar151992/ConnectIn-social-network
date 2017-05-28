package com.connectin.business.account.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.business.account.entity.Account;
import com.connectin.business.generic.dao.DataAccessor;
import com.connectin.common.domain.AccountAvailibility;
import com.connectin.constants.Message;
import com.connectin.exceptions.ConnectinBaseException;

@Repository
@Transactional
public class AccountDaoImpl extends DataAccessor<Account> implements IAccountDao {
	
	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	public Account getAccountById(int userId) throws ConnectinBaseException{
		try{
			Account account = null;
			account = (Account) entityManager.createQuery("Select a from Account a where a.userid=:userId")
					.setParameter("userId", userId).getSingleResult();
			return account;
		}catch(Exception e){
			throw new ConnectinBaseException(Message.DATA_NOT_FOUND);
		}
		
	}

	@Override
	public void checkAvailibility(Account account) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void changeAvailibility(AccountAvailibility availibility) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Account getById(String id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Account t) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(String id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(int id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Account> getAll() throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Account> filter(String id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Account> filter(int id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Account getById(int id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}
	

}
