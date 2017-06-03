package com.connectin.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/")
public class AppController {

	@RequestMapping(value="/index", method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest request, HttpServletResponse response){
		ModelAndView model = new ModelAndView();
		model.setViewName("index");
		return model;
	};
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public ModelAndView landingPage(HttpServletRequest request, HttpServletResponse response){
		ModelAndView model = new ModelAndView();
		model.setViewName("index");
		return model;
	};
	
	@RequestMapping(value="/storyline", method = RequestMethod.GET)
	public ModelAndView storyPage(HttpServletRequest request, HttpServletResponse response){
		ModelAndView model = new ModelAndView();
		model.setViewName("home");
		return model;
	};
	
	
	
	
}
