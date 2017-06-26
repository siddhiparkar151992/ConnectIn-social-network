package com.connectin.business.account.registration.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.business.user.entity.User;
import com.connectin.exceptions.ConnectinBaseException;

@Repository
@Transactional
public class RegistrationDaoImpl implements IRegistrationDao {

	@PersistenceContext
	EntityManager entityManager;
	
	
	
	
	@Override
	
	public User registerUser(User user) throws ConnectinBaseException {
		try {
			entityManager.
			createNativeQuery("insert into User(firstName, lastName,email,gender, birthDate, user_name) "
					+ "values(:firstName,:two,:three,:four,:five,:six)")
			.setParameter("firstName", user.getFirstName())
			.setParameter("lastName",user.getLastName())
			.setParameter("email", user.getEmail())
			.setParameter("gender", user.getGender().getText())
			.setParameter("birthDate", user.getCreatedDate())
			.setParameter("user_name", user.getUserName()).executeUpdate();
			
			User userCreated = null;
			userCreated = (User) entityManager.createQuery("Select a from User a where a.userName=:userName")
					.setParameter("userName", user.getUserName()).getSingleResult();
			return userCreated;
		} catch (Exception e) {
			
			throw new ConnectinBaseException("Could not create user account! Please check for user data.");
		}
		
	}

}
