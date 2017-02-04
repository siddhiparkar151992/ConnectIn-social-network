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
	
	@Autowired
	IAuthenticator authService;
	
	@RequestMapping(value="/authenticate/login", method = RequestMethod.POST)
	public @ResponseBody Response<UserCredentials> helloworld(@RequestBody UserCred userCreds) throws Exception{
		HashMap<String,UserCredentials> userData; 
		try{
			userData= authService.login(userCreds);
			UserCredentials user =userData.get("userData");
		}catch(InvalidCredentialsException e){
			return new Response<UserCredentials>(-1, null, e.getMessage());
		} catch (NoResultException e) {
			return new Response<UserCredentials>(-1, null, AuthErrors.INVALID_USER_CREDS);
		}
		catch(Exception e){
			return new Response<>(-1, null, null, 0, AuthErrors.UNKNOWN_EXCEPTION);
		}
		return new Response<UserCredentials>(0, userData, "Login succesful");
	};
	

}