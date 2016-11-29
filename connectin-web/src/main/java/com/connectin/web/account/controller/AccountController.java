package com.connectin.web.account.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.connectin.business.account.service.AccountService;
import com.connectin.domain.account.Account;
import com.connectin.utils.Response;


@Controller("/account")
public class AccountController {
	
	@Autowired
	AccountService accountService;
	
	
	@RequestMapping("/getAccount")
	public @ResponseBody Response getAccount(@RequestParam String userId, @RequestParam String sessionsId, @RequestParam String hashToken){
		try{
			
				Account userAccount = accountService.getAccount(userId,sessionsId, hashToken);
				Map<String, Account> data = new HashMap<String, Account>();
				return new Response(0, null, "Failed",0,null);
			
		}catch(Exception e){
			return new Response(0, null, "Failed",0, e.getMessage());
		}
		
	}
}
