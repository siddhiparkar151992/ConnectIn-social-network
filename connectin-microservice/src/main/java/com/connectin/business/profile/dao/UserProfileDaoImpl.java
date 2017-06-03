package com.connectin.business.profile.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.business.account.entity.Account;
import com.connectin.business.generic.dao.DataAccessor;
import com.connectin.common.domain.AccountAvailibility;
import com.connectin.constants.Message;
import com.connectin.domain.profile.ProfileDTO;
import com.connectin.exceptions.ConnectinBaseException;

@Repository
@Transactional
public class UserProfileDaoImpl implements IUserProfileDao {
	
	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	public ProfileDTO getUserProfileById(int userId) throws ConnectinBaseException {
		ProfileDTO userProf = null;
		try{
			
		
			userProf = (ProfileDTO) entityManager.createQuery("Select new "
					+ "com.connectin.domain.profile.ProfileDTO(a.id,"
					+ "a.image.url,a.image.url,"
					+ "a.totalExp,a.address,a.currentCompany) from UserProfile "
					+ "a where a.user.id=:userId")
					.setParameter("userId", userId).getSingleResult();
			return userProf;
		}catch(NoResultException r){
			return userProf;
		}catch(Exception e){
			throw new ConnectinBaseException(Message.DATA_NOT_FOUND);
		}
	}
	
	

}
