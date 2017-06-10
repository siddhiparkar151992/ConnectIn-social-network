package com.connectin.business.post.manager;

import java.util.List;

import com.connectin.domain.comments.CommentDTO;
import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;

public interface IPostManager {
	public List<PostDTO> populatePosts(int userId) throws ConnectinBaseException;
	public List<PostDTO> getPostsForUserFeed(int[] connections) throws ConnectinBaseException;
}
