package com.connectin.business.profile.dao;

import com.connectin.domain.profile.ProfileDTO;
import com.connectin.exceptions.ConnectinBaseException;;

public interface IUserProfileDao{
	ProfileDTO getUserProfileById(int userId) throws ConnectinBaseException;
}
