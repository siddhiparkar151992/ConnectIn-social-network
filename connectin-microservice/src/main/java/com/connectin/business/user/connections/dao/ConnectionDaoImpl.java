package com.connectin.business.user.connections.dao;

import java.util.ArrayList;
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
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;

@Repository
@Transactional
public class ConnectionDaoImpl implements IConnectionsDao {

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public List<User> getConnectionByUserId(int userId) throws ConnectinBaseException {
		List<User> connections = new ArrayList<>();
		try {
			connections = (List<User>) entityManager.createQuery("select p.connection from Connection p where p.user.id=:userId")
					.setParameter("userId", userId).getResultList();
			return connections;
		} catch (Exception e) {
			throw new ConnectinBaseException("Could not load posts!");

		}
	}

	

}
