package com.connectin.business.user.controller;

import com.connectin.authenticate.entity.User;
import com.connectin.business.user.service.UserService;
import com.connectin.exceptions.account.AccountException;
import com.connectin.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/connectin/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/details")
    public Response getUserInfo(HttpServletRequest request,
                                HttpServletResponse response) throws AccountException {
        String token = request.getHeader("token");
        User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userName = principal.getUsername();
        Response userResponse = userService.getUser(userName, token);
        return userResponse;

    }
}
