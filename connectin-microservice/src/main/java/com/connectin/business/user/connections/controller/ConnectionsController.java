package com.connectin.business.user.connections.controller;

import com.connectin.authenticate.entity.User;
import com.connectin.business.user.connections.service.ConnectionService;
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
@RequestMapping(value = "/connectin/api/user/connections")
public class ConnectionsController {

    @Autowired
    private ConnectionService connectionService;

    @RequestMapping("/details")
    public Response getUserInfo(HttpServletRequest request,
                                HttpServletResponse response) throws AccountException {
        User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = principal.getUsername();
        Response userResponse = connectionService.getConnectionsPerUser(username, "");
        return userResponse;

    }

    @RequestMapping("/")
    public Response getUserConnection(HttpServletRequest request,
                                HttpServletResponse response) throws AccountException {
        User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = principal.getUsername();
        Response userResponse = connectionService.getUserConnections(username);
        return userResponse;

    }
}
