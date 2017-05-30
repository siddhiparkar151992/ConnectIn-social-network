/**
 * 
 */
package com.connectin.business.comments.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.domain.comments.CommentDTO;
import com.connectin.exceptions.ConnectinBaseException;

/**
 * @author Dell
 *
 */
@Repository
@Transactional
public class CommentsDaoImpl implements ICommentsDao {

	@PersistenceContext
	EntityManager entityManager;

	
	@Override
	public List<CommentDTO> getCommentsByPost(int postId) throws ConnectinBaseException {
		List<CommentDTO> posts = new ArrayList<>();
		try {
			posts = (List<CommentDTO>) entityManager
					.createQuery("select new com.connectin.domain.comments.CommentsDTO(c.createdDate"
							+ ", c.) "
							+ "from comments c where c.post.id=:postId")
					.setParameter("postId", postId).getResultList();
			return posts;
		} catch (Exception e) {
			throw new ConnectinBaseException("Could not load posts!");

		}
	}
}
