package com.connectin.business.education.dao;

import com.connectin.domain.education.EducationDTO;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

;

public interface IUserEducationDao {
    List<EducationDTO> getEducationByProfileId(int profileId) throws ConnectinBaseException;
}
