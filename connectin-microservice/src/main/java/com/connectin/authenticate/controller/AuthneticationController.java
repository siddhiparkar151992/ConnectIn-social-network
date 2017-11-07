package com.connectin.authenticate.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.connectin.authenticate.entity.user.UserCred;
import com.connectin.authenticate.security.provider.AuthProvider;
import com.connectin.constants.Message;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;


@RestController
@RequestMapping(value = "/connectin/api/")
public class AuthneticationController {

    
    @Autowired
    private AuthProvider authProvider;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public Response<Object> register(@RequestBody UserCred user) {
        String token;
        ResponseGenerator<Object> responseGenerator = new ResponseGenerator<>();
        try {
            token = authProvider.authenticateUser(user.getId(), user.getPassword());
            if(token != null){
                return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, token);
            }else{
                throw new ConnectinBaseException("login failed! Username or password is incorrect.");
            }
        } catch (Exception e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, null);
        }
    }


}