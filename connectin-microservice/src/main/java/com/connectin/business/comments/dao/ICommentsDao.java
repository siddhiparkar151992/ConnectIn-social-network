package com.connectin.business.comments.dao;

import java.util.List;

import com.connectin.domain.comments.CommentDTO;
import com.connectin.exceptions.ConnectinBaseException;

public interface ICommentsDao{
	List<CommentDTO> getCommentsByPost(int postId) throws ConnectinBaseException;
	
}
