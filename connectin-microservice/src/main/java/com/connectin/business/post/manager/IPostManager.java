package com.connectin.business.post.manager;

import java.util.List;

import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.domain.post.comments.CommentDTO;
import com.connectin.exceptions.ConnectinBaseException;

public interface IPostManager {
	public List<PostDTO> populatePosts(int userId) throws ConnectinBaseException;
	public List<CommentDTO> getCommentsPerPost(int postId) throws ConnectinBaseException;
	public List<LikeDTO> getLikesPerPost(int postId) throws ConnectinBaseException;
}
