package com.connectin.business.profile.service;

import com.connectin.domain.profile.ProfileDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;

public interface ProfileService {
	Response<ProfileDTO> getUserProfileByUserId(int userId);
}
