package com.connectin.business.feed.service;

import com.connectin.domain.feed.FeedDTO;
import com.connectin.utils.Response;

public interface FeedService {
	public Response<FeedDTO> getPostByUser(int userId);
	
}
