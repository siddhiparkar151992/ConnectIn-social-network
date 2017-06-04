package com.connectin.business.education.dao;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.business.account.entity.Account;
import com.connectin.business.generic.dao.DataAccessor;
import com.connectin.common.domain.AccountAvailibility;
import com.connectin.constants.Message;
import com.connectin.domain.education.EducationDTO;
import com.connectin.domain.profile.ProfileDTO;
import com.connectin.exceptions.ConnectinBaseException;

@Repository
@Transactional
public class UserEducationDaoImpl implements IUserEducationDao {
	
	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	public List<EducationDTO> getEducationByProfileId(int profId) throws ConnectinBaseException {
		try{
			List<EducationDTO> education = null;
			education = (List<EducationDTO>) entityManager.createQuery("Select new "
					+ "com.connectin.domain.education.EducationDTO(a.id,"
					+ "a.degree,a.completionDate,a.startDate) from EducationDetails "
					+ "a where a.profile.id=:profId")
					.setParameter("profId", profId).getResultList();
			return education;
		}catch(Exception e){
			throw new ConnectinBaseException(Message.DATA_NOT_FOUND);
		}
	}
	
	

}
