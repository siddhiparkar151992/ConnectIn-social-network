package com.connectin.business.likes.dao;

import java.util.List;

import com.connectin.domain.like.LikeDTO;
import com.connectin.exceptions.ConnectinBaseException;

public interface ILikesDao{
	List<LikeDTO> getLikesbyPost(int postId) throws ConnectinBaseException;
	List<LikeDTO> getLikesByComments(int commentId) throws ConnectinBaseException;
}

