package com.connectin.business.feed.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.connectin.business.feed.manager.IFeedManager;
import com.connectin.business.post.dao.IPostDao;
import com.connectin.business.post.entity.Post;
import com.connectin.business.post.manager.IPostManager;
import com.connectin.constants.Message;
import com.connectin.domain.feed.FeedDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;


@Service
public class FeedServiceImpl implements FeedService {

	@Autowired
	IFeedManager feedManager;
	
	@Autowired
	ResponseGenerator<FeedDTO> responseGenerator;


	@Override
	public Response<FeedDTO> getPostByUser(int userId) {
		FeedDTO post = null;
		try {
			post = feedManager.getFeedByUser(userId);
			
			if(!post.equals(null)){
				
				return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, post);
			}
		} catch (ConnectinBaseException e) {
			return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, post);
		}
		return null;

	}
	
	

}
