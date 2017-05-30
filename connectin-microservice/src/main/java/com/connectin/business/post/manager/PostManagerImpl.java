package com.connectin.business.post.manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.connectin.business.post.dao.IPostDao;
import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.domain.post.comments.CommentDTO;
import com.connectin.exceptions.ConnectinBaseException;
@Service
public class PostManagerImpl implements IPostManager {
	
	@Autowired
	private IPostDao postDao;
	
	@Override
	public List<PostDTO> populatePosts(int userId) throws ConnectinBaseException{
		List<PostDTO> posts = postDao.getPostsByUser(userId);
		
		return posts;
	}
	
	@Override
	public List<CommentDTO> getCommentsPerPost(int postId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<LikeDTO> getLikesPerPost(int postId) {
		// TODO Auto-generated method stub
		return null;
	}

}
