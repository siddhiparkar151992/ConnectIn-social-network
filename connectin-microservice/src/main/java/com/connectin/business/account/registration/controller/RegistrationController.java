package com.connectin.business.account.registration.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.connectin.business.account.registration.service.RegistrationService;
import com.connectin.business.user.entity.User;
import com.connectin.domain.user.UserRequest;
import com.connectin.exceptions.account.AccountException;
import com.connectin.utils.Response;

@RestController
@RequestMapping(value = "/connectin/api/account/register")
public class RegistrationController {
	
	@Autowired
	private RegistrationService registrationService;

	@RequestMapping(method= RequestMethod.POST)
	public @ResponseBody Response registerUser(@RequestBody UserRequest user, HttpServletRequest request,
			HttpServletResponse response) throws AccountException{
		String token = request.getHeader("token");
		
		return registrationService.registerUser(user);
	}
}
