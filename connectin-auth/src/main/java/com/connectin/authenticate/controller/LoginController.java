package com.connectin.authenticate.controller;

import com.connectin.authenticate.entity.User;
import com.connectin.config.ApplicationConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller

public class LoginController {

    @Autowired
    private ApplicationConfig appConfig;

    @RequestMapping(value = "/api/registration", method = RequestMethod.POST)
    public ResponseEntity<Object> register(@RequestBody User user) {

        return null;

    }


}