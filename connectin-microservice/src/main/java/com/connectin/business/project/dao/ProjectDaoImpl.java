package com.connectin.business.project.dao;

import java.sql.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.constants.Message;
import com.connectin.domain.project.ProjectDTO;
import com.connectin.exceptions.ConnectinBaseException;

@Repository
@Transactional
public class ProjectDaoImpl implements IProjectDao {
	
	@PersistenceContext
	EntityManager entityManager;

	@Override
	public List<ProjectDTO> getProjectsByEmploymentId(int employmentId) throws ConnectinBaseException {
		try{
			List<ProjectDTO> userEmployments = null;
			userEmployments = (List<ProjectDTO>) entityManager.createQuery("Select new "
					+ "com.connectin.domain.project.ProjectDTO(p.id, p.title, "
					+ "p.startDate,p.endDate,p.functions,p.teamSize, p.imageUrl) from Project "
					+ "p where p.employmentHistory.id=:employmentId")
					.setParameter("employmentId", employmentId).getResultList();
			return userEmployments;
		}catch(Exception e){
			throw new ConnectinBaseException(Message.DATA_NOT_FOUND);
		}
	
	}
}
