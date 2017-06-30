package com.connectin.business.profile.service;

import com.connectin.business.profile.manager.IProfileManager;
import com.connectin.constants.Message;
import com.connectin.domain.profile.ProfileDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    IProfileManager profileManager;

    @Autowired
    ResponseGenerator<ProfileDTO> responseGenerator;

    @Override
    public Response<ProfileDTO> getUserProfileByUserId(int userId) {
        ProfileDTO profile = null;
        try {
            profile = profileManager.getProfileByUser(userId);

            if (!profile.equals(null)) {

                return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, profile);
            }
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, profile);
        }
        return null;

    }

}
