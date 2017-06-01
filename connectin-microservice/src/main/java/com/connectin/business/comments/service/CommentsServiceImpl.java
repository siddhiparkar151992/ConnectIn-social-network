/**
 * 
 */
package com.connectin.business.comments.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.jboss.logging.annotations.Pos;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.business.post.entity.Post;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;

/**
 * @author Dell
 *
 */
@Repository
@Transactional
public class CommentsServiceImpl implements CommentService {

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public List<CommentDTO> getCommentsByPostId(int postId) throws ConnectinBaseException {
		List<CommentDTO> comments = new ArrayList<>();
		try {
			comments = (List<CommentDTO>) entityManager
					.createQuery("select new com.connectin.domain.post.PostDTO(p.id,"
							+ " p.categoryId.categoryName, p.visibility, p.tags, " + "p.createdTime) "
							+ "from post p where p.user.id=:userId")
					.setParameter("postId", postId).getResultList();
			return comments;
		} catch (Exception e) {
			throw new ConnectinBaseException("Could not load posts!");

		}
	}
}
