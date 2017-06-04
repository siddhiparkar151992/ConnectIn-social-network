package com.connectin.business.user.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.connectin.business.account.service.AccountService;
import com.connectin.business.user.service.UserService;
import com.connectin.exceptions.account.AccountException;
import com.connectin.utils.Response;

@RestController
@RequestMapping(value = "/connectin/api/user")
public class UserController {
	
	@Autowired
	private UserService userService;

	@RequestMapping("/details")
	public Response getUserInfo(@RequestParam(value="username") String userName, HttpServletRequest request,
			HttpServletResponse response) throws AccountException{
		String token = request.getHeader("token");
		Response userResponse = userService.getUser(userName, token);
		return userResponse;
		
	}
}
