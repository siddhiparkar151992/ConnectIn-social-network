package com.connectin.web.auth;

import com.connectin.authenticate.entity.AuthErrors;
import com.connectin.config.ApplicationConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;


@Controller

public class AuthController {

    @Autowired
    private ApplicationConfig appConfig;


    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView login(@RequestParam(required = false, value = "error") String error) {

        ModelAndView model = new ModelAndView();
        if (error != null) {
            model.addObject("error", AuthErrors.INVALID_USER_CREDS);
        }

        model.setViewName("login");
        return model;
    }

    ;

    @RequestMapping(value = "/404", method = RequestMethod.GET)
    public String error() {
        return "/WEB-INF/views/404.jsp";
    }

    ;

    @RequestMapping(value = "/403", method = RequestMethod.GET)
    public ModelAndView accesssDenied() {

        ModelAndView model = new ModelAndView();
        model.setViewName("403");
        return model;

    }
}
