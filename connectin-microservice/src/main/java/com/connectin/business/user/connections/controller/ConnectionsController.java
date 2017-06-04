package com.connectin.business.user.connections.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.connectin.business.account.service.AccountService;
import com.connectin.business.user.connections.service.ConnectionService;
import com.connectin.business.user.service.UserService;
import com.connectin.exceptions.account.AccountException;
import com.connectin.utils.Response;

@RestController
@RequestMapping(value = "/connectin/api/user/connections")
public class ConnectionsController {
	
	@Autowired
	private ConnectionService connectionService;

	@RequestMapping("/details")
	public Response getUserInfo(@RequestParam(value="userId") int userId, HttpServletRequest request,
			HttpServletResponse response) throws AccountException{
		String token = request.getHeader("token");
		Response userResponse =  connectionService.getConnectionsPerUser(userId, token);
		return userResponse;
		
	}
}
