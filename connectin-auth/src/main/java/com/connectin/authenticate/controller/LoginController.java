package com.connectin.authenticate.controller;

import java.util.HashMap;

import javax.persistence.NoResultException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connectin.authenticate.entity.AuthErrors;
import com.connectin.authenticate.entity.Response;
import com.connectin.authenticate.entity.user.UserCred;
import com.connectin.authenticate.entity.user.UserCredentials;
import com.connectin.authenticate.service.IAuthenticator;
import com.connectin.authenticate.util.exceptions.InvalidCredentialsException;


@Controller
public class LoginController{
	
	@Autowired
	IAuthenticator authManager;
	
	@RequestMapping(value="/authenticate/login", method = RequestMethod.POST)
	public @ResponseBody Response<UserCredentials> helloworld(@RequestParam("id") String id,@RequestParam("password") String password ) throws Exception{
		HashMap<String,UserCredentials> userData;
		try{
			userData= authManager.login(new UserCred(id, password));
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
	
	@RequestMapping(value="/login", method = RequestMethod.GET)
	public String helloworld(){
		return "login";
	};

	@RequestMapping(value="/home", method = RequestMethod.GET)
	public String index(){
		return "index";
	};
	
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public String de(){
		return "login";
	};
	
	@RequestMapping(value="/403", method = RequestMethod.GET)
	public String error(){
		return "403";
	};
	
	@RequestMapping(value="/loginUser", method = RequestMethod.POST)
	public String dummy(){
		System.out.println("/loginUser");
		return "";
	};
}