/**
 * 
 */
package com.connectin.authenticate.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.authenticate.entity.user.UserCredentials;

/**
 * @author Dell
 *
 */

@Repository
@Transactional
public class AuthenticationDaoImpl implements IAuthenticationDao {

	@PersistenceContext
	EntityManager em;

	@Override
	public UserCredentials login(String username, String password) {
		UserCredentials user = (UserCredentials) this.em
				.createQuery("SELECT v FROM UserCredentials v where v.userName=:user and password=:pwd")
				.setParameter("user", username).setParameter("pwd", password).getSingleResult();
		return user;
	}

}
