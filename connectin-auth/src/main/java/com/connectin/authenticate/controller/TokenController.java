package com.connectin.authenticate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.connectin.authenticate.entity.user.UserCred;
import com.connectin.authenticate.security.provider.AuthProvider;
import com.connectin.constants.Message;

@RestController
@RequestMapping(value = "/connectin/api/")
public class TokenController {

	@Autowired
	private AuthProvider authProvider;

	@Autowired
	ResponseGenerator<Token> responseGenerator;

	@RequestMapping(value = "token", method = RequestMethod.POST)
	public Response<Token> getToken(@RequestBody UserCred user) {
		Token tokenRes = new Token();
		Response<Token> res = new Response<>();
		String token;
		try {
			token = authProvider.authenticateUser(user.getId(), user.getPassword());
			tokenRes.setToken(token);
			if (token != null) {

				res = responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, tokenRes);
			} else {
				res = responseGenerator.generateErrorResponse("error", Message.ERROR_CODE, null);
			}
			return res;
		} catch (Exception e) {
			res = responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, null);
		}
		return res;
	}

}