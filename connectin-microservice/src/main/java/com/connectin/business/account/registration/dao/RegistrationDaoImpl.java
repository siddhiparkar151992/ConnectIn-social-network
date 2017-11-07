package com.connectin.business.account.registration.dao;

import com.connectin.business.user.entity.User;
import com.connectin.exceptions.ConnectinBaseException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;

@Repository
@Transactional
public class RegistrationDaoImpl implements IRegistrationDao {

	@PersistenceContext
	EntityManager entityManager;

	public User returnIfUserExists(String userName) {
		User userCreated = null;
		try {

			userCreated = (User) entityManager.createQuery("Select a from User a where a.userName=:userName")
					.setParameter("userName", userName).getSingleResult();
			return userCreated;
		} catch (NoResultException e) {
			return userCreated;
		}
	}

	@Override

	public User registerUser(User user) throws ConnectinBaseException {

		User existingUser = returnIfUserExists(user.getUserName());
		if(existingUser!=null){
			throw new ConnectinBaseException("User already exists!");
		}
		entityManager
				.createNativeQuery("insert into User(firstName, lastName,email,gender, birthDate, user_name) "
						+ "values(:firstName,:lastName,:email,:gender,:birthDate,:user_name)")
				.setParameter("firstName", user.getFirstName()).setParameter("lastName", user.getLastName())
				.setParameter("email", user.getEmail()).setParameter("gender", user.getGender().getText())
				.setParameter("birthDate", user.getCreatedDate()).setParameter("user_name", user.getUserName())
				.executeUpdate();

		return returnIfUserExists(user.getUserName());

	}

}
