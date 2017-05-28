package com.connectin.business.post.service;

import java.util.List;

import com.connectin.domain.post.PostDTO;
import com.connectin.utils.Response;

public interface PostService {
	public Response<List<PostDTO>> getPostByUser(int userId);
	
}
