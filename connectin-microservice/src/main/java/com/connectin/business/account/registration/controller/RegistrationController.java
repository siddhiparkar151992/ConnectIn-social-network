package com.connectin.business.account.registration.controller;

import com.connectin.business.account.registration.service.RegistrationService;
import com.connectin.domain.user.UserRequest;
import com.connectin.exceptions.account.AccountException;
import com.connectin.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/connectin/api/account/register")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody
    Response registerUser(@RequestBody UserRequest user, HttpServletRequest request,
                          HttpServletResponse response) throws AccountException {
        String token = request.getHeader("token");

        return registrationService.registerUser(user);
    }
}
