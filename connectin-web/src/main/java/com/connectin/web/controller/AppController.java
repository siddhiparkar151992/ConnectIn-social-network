package com.connectin.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/")
public class AppController {

	@RequestMapping(value="/index", method = RequestMethod.GET)
	public String index(){
		return "index";
	};
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public String landingPage(){
		return "index";
	};
	
	@RequestMapping(value="/storyline", method = RequestMethod.GET)
	public String storyPage(){
		return "home";
	};
	
	
	
	
}
