package com.connectin.business.account.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.connectin.business.account.service.AccountService;
import com.connectin.exceptions.account.AccountException;
import com.connectin.utils.Response;

@RestController
@RequestMapping(value = "/connectin/api/account")
public class AccountController {
	
	@Autowired
	private AccountService accountService;

	@RequestMapping("/details")
	public Response getAccountInfo(@RequestParam int userId, HttpServletRequest request,
			HttpServletResponse response) throws AccountException{
		String token = request.getHeader("token");
		Response accountResponse = accountService.getAccount(userId, token);
		return accountResponse;
		
	}
}
