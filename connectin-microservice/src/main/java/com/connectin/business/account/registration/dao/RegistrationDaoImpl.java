package com.connectin.business.account.registration.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.business.user.entity.User;
import com.connectin.exceptions.ConnectinBaseException;

@Repository
@Transactional
public class RegistrationDaoImpl implements IRegistrationDao {

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public boolean registerUser(User user) throws ConnectinBaseException {
		try {
			entityManager.getTransaction().begin();
			entityManager.persist(user);
			entityManager.getTransaction().commit();
			return true;
		} catch (Exception e) {
			entityManager.getTransaction().rollback();
			throw new ConnectinBaseException("Could not create user account! Please check for user data.");
		}
		
	}

}
