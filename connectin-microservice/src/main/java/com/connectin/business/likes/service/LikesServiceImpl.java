/**
 * 
 */
package com.connectin.business.likes.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.jboss.logging.annotations.Pos;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.business.post.entity.Post;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;

/**
 * @author Dell
 *
 */
@Repository
@Transactional
public class LikesServiceImpl implements LikesService {

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public Response<List<LikeDTO>> getLikesByPostId(int postId) throws ConnectinBaseException {
		List<LikeDTO> comments = new ArrayList<>();
		try {
			
		} catch (Exception e) {
			throw new ConnectinBaseException("Could not load posts!");

		}
		return null;
	}

	@Override
	public Response<List<LikeDTO>> getLikesByCommentId(int commentId) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}
}
