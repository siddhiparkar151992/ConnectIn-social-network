package com.connectin.business.user.connections.service;

import java.util.List;

import com.connectin.business.user.entity.User;
import com.connectin.utils.Response;

public interface ConnectionService {
	public Response<List<User>> getConnectionsPerUser(int userId, String hashToken);
}
