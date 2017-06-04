package com.connectin.business.profile.manager;

import com.connectin.domain.profile.ProfileDTO;
import com.connectin.exceptions.ConnectinBaseException;

public interface IProfileManager {
	public ProfileDTO getProfileByUser(int userId) throws ConnectinBaseException;
}
