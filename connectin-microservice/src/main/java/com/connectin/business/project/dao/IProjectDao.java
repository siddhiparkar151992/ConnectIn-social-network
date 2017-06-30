package com.connectin.business.project.dao;

import com.connectin.domain.project.ProjectDTO;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

;

public interface IProjectDao {
    List<ProjectDTO> getProjectsByEmploymentId(int empId) throws ConnectinBaseException;
}
