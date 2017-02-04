package com.connectin.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/connectin")
public class AppController {

	@RequestMapping(value="/home", method = RequestMethod.GET)
	public String index(){
		return "index";
	};
	@RequestMapping(value="/", method = RequestMethod.GET)
	public String login(){
		return "/connectin/login";
	};
	
	@RequestMapping(method=RequestMethod.GET)
	public String defaultLogin(){
		return "login";
	};
	
	
	
}
