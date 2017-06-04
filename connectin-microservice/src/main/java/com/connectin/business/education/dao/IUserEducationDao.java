package com.connectin.business.education.dao;

import java.util.List;

import com.connectin.domain.education.EducationDTO;
import com.connectin.domain.profile.ProfileDTO;
import com.connectin.exceptions.ConnectinBaseException;;

public interface IUserEducationDao{
	List<EducationDTO> getEducationByProfileId(int profileId) throws ConnectinBaseException;
}
