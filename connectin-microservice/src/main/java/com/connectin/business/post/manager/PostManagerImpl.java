package com.connectin.business.post.manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.connectin.business.comments.dao.ICommentsDao;
import com.connectin.business.likes.dao.ILikesDao;
import com.connectin.business.post.dao.IPostDao;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
@Service
public class PostManagerImpl implements IPostManager {
	
	@Autowired
	private IPostDao postDao;
	
	@Autowired
	private ICommentsDao commentsDao;
	
	@Autowired
	private ILikesDao likesDao;
	
	@Override
	public List<PostDTO> populatePosts(int userId) throws ConnectinBaseException{
		List<PostDTO> posts = postDao.getPostsByUser(userId);
		return this.populatePostWithComments(posts);
	}
	
	private List<CommentDTO> getCommentsByPost(int postId) throws ConnectinBaseException{
		List<CommentDTO> comments = commentsDao.getCommentsByPost(postId);
		return comments;
		
	}
	
	private List<LikeDTO> getLikesPerPost(int postId) throws ConnectinBaseException{
		List<LikeDTO> likes = likesDao.getLikesbyPost(postId);
		return likes;
	}
	
	private List<PostDTO> populatePostWithComments(List<PostDTO> posts) throws ConnectinBaseException{
		for(PostDTO post: posts ){
			List<CommentDTO> comments = this.getCommentsByPost(post.getId());
			List<LikeDTO> likes = this.getLikesPerPost(post.getId());
			post.setLikes(likes);
			post.setComments(comments);
		}
		return posts;
	}
	@Override
	public List<PostDTO> getPostsForUserFeed(int[] connections) throws ConnectinBaseException {
		List<PostDTO> posts = postDao.getPostsByFeed(connections);
		return this.populatePostWithComments(posts);
		
	}
}
