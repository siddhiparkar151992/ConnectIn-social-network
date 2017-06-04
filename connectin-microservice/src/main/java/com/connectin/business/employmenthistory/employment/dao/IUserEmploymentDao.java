package com.connectin.business.employmenthistory.employment.dao;

import java.util.List;

import com.connectin.domain.employmenthistory.employment.EmploymentHistoryDTO;
import com.connectin.exceptions.ConnectinBaseException;;

public interface IUserEmploymentDao{
	List<EmploymentHistoryDTO> getEmploymentById(int userId) throws ConnectinBaseException;
}
