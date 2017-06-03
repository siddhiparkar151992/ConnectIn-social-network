package com.connectin.business.user.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.business.account.entity.Account;
import com.connectin.business.generic.dao.DataAccessor;
import com.connectin.business.user.entity.User;
import com.connectin.common.domain.AccountAvailibility;
import com.connectin.constants.Message;
import com.connectin.exceptions.ConnectinBaseException;

@Repository
@Transactional
public class UserDaoImpl extends DataAccessor<User> implements IUserDao {

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public User getById(String id) throws ConnectinBaseException {
		try {
			User user = null;
			user = (User) entityManager.createQuery("Select a from User a where a.id=:id")
					.setParameter("id", Integer.parseInt(id)).getSingleResult();
			return user;
		} catch (Exception e) {
			throw new ConnectinBaseException(Message.DATA_NOT_FOUND);
		}

	}

	@Override
	public void update(User t) throws ConnectinBaseException {
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
	public List<User> getAll() throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> filter(String id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> filter(int id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getById(int id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getByName(String userName) throws ConnectinBaseException {
		try {
			User user = null;
			user = (User) entityManager.createQuery("Select a from User a where a.userName=:userName")
					.setParameter("userName", userName).getSingleResult();
			return user;
		} catch (Exception e) {
			throw new ConnectinBaseException(Message.DATA_NOT_FOUND);
		}
	}

}
