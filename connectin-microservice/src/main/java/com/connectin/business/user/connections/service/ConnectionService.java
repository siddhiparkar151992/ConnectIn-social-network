package com.connectin.business.user.connections.service;

import com.connectin.business.user.entity.User;
import com.connectin.utils.Response;

import java.util.List;

public interface ConnectionService {
    public Response<List<User>> getConnectionsPerUser(String userName, String hashToken);
}
