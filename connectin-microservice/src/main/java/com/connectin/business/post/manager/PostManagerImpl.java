package com.connectin.business.post.manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.connectin.business.comments.dao.ICommentsDao;
import com.connectin.business.post.dao.IPostDao;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
@Service
public class PostManagerImpl implements IPostManager {
	
	@Autowired
	private IPostDao postDao;
	
	@Autowired
	private ICommentsDao commentsDao;

	
	@Override
	public List<PostDTO> populatePosts(int userId) throws ConnectinBaseException{
		List<PostDTO> posts = postDao.getPostsByUser(userId);
		for(PostDTO post: posts ){
			List<CommentDTO> comments = this.getCommentsByPost(post.getId());
			post.setComments(comments);
		}
		return posts;
	}
	
	private List<CommentDTO> getCommentsByPost(int postId) throws ConnectinBaseException{
		List<CommentDTO> comments = commentsDao.getCommentsByPost(postId);
		return comments;
		
	}
}
