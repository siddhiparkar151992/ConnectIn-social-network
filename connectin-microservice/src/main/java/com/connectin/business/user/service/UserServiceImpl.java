package com.connectin.business.user.service;

import com.connectin.business.user.connections.dao.IConnectionsDao;
import com.connectin.business.user.dao.IUserDao;
import com.connectin.business.user.entity.User;
import com.connectin.constants.Message;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    IUserDao userDao;
    @Autowired
    ResponseGenerator<User> responseGenerator;
    @Autowired
    private IConnectionsDao connectionDao;

    @Override
    public Response<User> getUser(String userName, String hashToken) {
        User user = null;
        try {
            user = userDao.getByName(userName);

            if (!user.equals(null)) {

                return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, user);
            }
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, user);
        }
        return null;
    }


}
