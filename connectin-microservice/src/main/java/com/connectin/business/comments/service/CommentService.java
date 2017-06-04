package com.connectin.business.comments.service;

import java.util.List;

import com.connectin.business.generic.dao.DataAccessor;
import com.connectin.business.post.entity.Post;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;

public interface CommentService{
	Response<List<CommentDTO>> getCommentsByPostId(int postId) throws ConnectinBaseException;
	
}
