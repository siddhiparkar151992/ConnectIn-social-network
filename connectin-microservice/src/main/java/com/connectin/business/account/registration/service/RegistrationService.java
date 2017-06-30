package com.connectin.business.account.registration.service;

import com.connectin.domain.user.UserRequest;
import com.connectin.utils.Response;

public interface RegistrationService {
    public Response registerUser(UserRequest user);
}
