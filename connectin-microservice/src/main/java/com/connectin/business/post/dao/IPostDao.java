package com.connectin.business.post.dao;

import java.util.List;

import com.connectin.business.generic.dao.DataAccessor;
import com.connectin.business.post.entity.Post;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;

public interface IPostDao{
	List<PostDTO> getPostsByUser(int userId) throws ConnectinBaseException;
	List<PostDTO> getPostsByFeed(int[] connections) throws ConnectinBaseException;
	
}
