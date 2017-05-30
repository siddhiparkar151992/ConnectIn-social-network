package com.connectin.business.user.service;

import com.connectin.business.account.entity.Account;
import com.connectin.business.user.entity.User;
import com.connectin.utils.Response;

public interface UserService {
	public Response<User> getUser(String userId, String hashToken);
}
