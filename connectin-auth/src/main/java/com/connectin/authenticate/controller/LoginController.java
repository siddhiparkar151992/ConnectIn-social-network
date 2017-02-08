package com.connectin.authenticate.controller;

import java.util.HashMap;

import javax.persistence.NoResultException;

import org.apache.catalina.core.ApplicationFilterConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.connectin.authenticate.entity.AuthErrors;
import com.connectin.authenticate.entity.Response;
import com.connectin.authenticate.entity.user.UserCred;
import com.connectin.authenticate.entity.user.UserCredentials;
import com.connectin.authenticate.service.IAuthenticator;
import com.connectin.authenticate.util.exceptions.InvalidCredentialsException;
import com.connectin.config.ApplicationConfig;


@Controller
public class LoginController{
	
	@Autowired
	private ApplicationConfig appConfig;
	
	
	

}