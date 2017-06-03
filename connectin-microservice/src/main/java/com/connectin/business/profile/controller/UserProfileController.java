package com.connectin.business.profile.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.connectin.business.account.service.AccountService;
import com.connectin.business.profile.service.ProfileService;
import com.connectin.domain.profile.ProfileDTO;
import com.connectin.exceptions.account.AccountException;
import com.connectin.utils.Response;

@RestController
@RequestMapping(value = "/connectin/api/user/profile")
public class UserProfileController {
	
	@Autowired
	private ProfileService profileService;
	
	@RequestMapping("/details")
	public Response<ProfileDTO> getAccountInfo(@RequestParam int userId, HttpServletRequest request,
			HttpServletResponse response) throws AccountException{
		Response<ProfileDTO> profileResponse = profileService.getUserProfileByUserId(userId);
		return profileResponse;
		
	}
}
