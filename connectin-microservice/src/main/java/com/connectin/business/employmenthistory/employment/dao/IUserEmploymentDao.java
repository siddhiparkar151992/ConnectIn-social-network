package com.connectin.business.employmenthistory.employment.dao;

import com.connectin.domain.employmenthistory.employment.EmploymentHistoryDTO;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

;

public interface IUserEmploymentDao {
    List<EmploymentHistoryDTO> getEmploymentById(int userId) throws ConnectinBaseException;
}
