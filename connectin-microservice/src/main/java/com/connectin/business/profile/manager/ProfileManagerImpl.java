package com.connectin.business.profile.manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.connectin.business.education.dao.IUserEducationDao;
import com.connectin.business.employmenthistory.employment.dao.IUserEmploymentDao;
import com.connectin.business.profile.dao.IUserProfileDao;
import com.connectin.domain.education.EducationDTO;
import com.connectin.domain.employmenthistory.employment.EmploymentHistoryDTO;
import com.connectin.domain.profile.ProfileDTO;
import com.connectin.exceptions.ConnectinBaseException;

@Service
public class ProfileManagerImpl implements IProfileManager {

	@Autowired
	private IUserProfileDao profileDao;

	@Autowired
	private IUserEducationDao eduDao;

	@Autowired
	private IUserEmploymentDao employmentDao;

	@Override
	public ProfileDTO getProfileByUser(int userId) throws ConnectinBaseException {
		ProfileDTO profile = profileDao.getUserProfileById(userId);
		List<EducationDTO> educationHistory = eduDao.getEducationByProfileId(profile.getId());
		profile.setEudcationalHistory(educationHistory);

		List<EmploymentHistoryDTO> employmentHistory = employmentDao.getEmploymentById(userId);
		profile.setEmpHistory(employmentHistory);
		return profile;

	}
}
