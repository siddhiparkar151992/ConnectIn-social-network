package com.connectin.business.project.dao;

import java.util.List;

import com.connectin.domain.project.ProjectDTO;
import com.connectin.exceptions.ConnectinBaseException;;

public interface IProjectDao{
	List<ProjectDTO> getProjectsByEmploymentId(int empId) throws ConnectinBaseException;
}
