package com.connectin.business.user.connections.service;

import com.connectin.business.user.connections.dao.IConnectionsDao;
import com.connectin.business.user.entity.User;
import com.connectin.constants.Message;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConnectionServiceImpl implements ConnectionService {

    @Autowired
    private IConnectionsDao connectionDao;

    @Autowired
    ResponseGenerator<List<User>> responseGenerator;

    @Override
    public Response<List<User>> getConnectionsPerUser(int userId, String hashToken) {
        List<User> user = null;
        try {
            user = connectionDao.getConnectionByUserId(userId);

            if (!user.equals(null)) {

                return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, user);
            }
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, user);
        }
        return null;
    }


}
