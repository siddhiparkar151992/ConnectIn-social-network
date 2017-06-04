package com.connectin.business.employmenthistory.employment.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.business.project.dao.IProjectDao;
import com.connectin.constants.Message;
import com.connectin.domain.employmenthistory.employment.EmploymentHistoryDTO;
import com.connectin.domain.project.ProjectDTO;
import com.connectin.exceptions.ConnectinBaseException;

@Repository
@Transactional
public class UserEmploymentDaoImpl implements IUserEmploymentDao {

	@PersistenceContext
	EntityManager entityManager;

	@Autowired
	private IProjectDao projectDao;

	@Override
	public List<EmploymentHistoryDTO> getEmploymentById(int profileId) throws ConnectinBaseException {
		try {
			List<EmploymentHistoryDTO> userEmployments = null;
			userEmployments = (List<EmploymentHistoryDTO>) entityManager
					.createQuery("Select new "
							+ " com.connectin.domain.employmenthistory.employment.EmploymentHistoryDTO(a.id, "
							+ "a.companyName,a.startDate,a.endDate,a.achievmentTitle,a.achievmentDescription,a.type)"
							+ "from EmploymentHistory a where a.profiles.id=:profileId")
					.setParameter("profileId", profileId).getResultList();
			for (EmploymentHistoryDTO employments : userEmployments) {
				employments.setProjects(this.getEmploymentProjects(employments.getId()));
			}
			return userEmployments;
		} catch (Exception e) {
			throw new ConnectinBaseException(Message.DATA_NOT_FOUND);
		}
	}

	private List<ProjectDTO> getEmploymentProjects(int employmentId) throws ConnectinBaseException {
		return projectDao.getProjectsByEmploymentId(employmentId);
	}

}
