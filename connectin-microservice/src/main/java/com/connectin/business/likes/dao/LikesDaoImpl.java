/**
 * 
 */
package com.connectin.business.likes.dao;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.domain.comments.CommentDTO;
import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.like.LikeType;
import com.connectin.exceptions.ConnectinBaseException;

/**
 * @author Dell
 *
 */
@Repository
@Transactional
public class LikesDaoImpl implements ILikesDao {

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public List<LikeDTO> getLikesByComments(int commentId) throws ConnectinBaseException {
		List<LikeDTO> likes = new ArrayList<>();
		try {
			likes = (List<LikeDTO>) entityManager
					.createQuery("select new " + "com.connectin.domain.like.LikeDTO(l.id, l.user.id, "
							+ "l.user.firstName,l.user.lastName,l.user.email,l.createdDate) "
							+ "from likes l where l.comment.id=:commentId and l.type=:likeType")
					.setParameter("postId", commentId)
					.setParameter("likeType", LikeType.comment).getResultList();
			return likes;
		} catch (Exception e) {
			throw new ConnectinBaseException("Could not load likes!");

		}
	}

	@Override
	public List<LikeDTO> getLikesbyPost(int postId) throws ConnectinBaseException {
		List<LikeDTO> likes = new ArrayList<>();
		try {
			likes = (List<LikeDTO>) entityManager
					.createQuery("select new com.connectin.domain.like.LikeDTO(l.id, l.user.id, "
							+ "l.user.firstName,l.user.lastName,l.user.email,l.createdTime, l.type) "
							+ "from likes l where l.postLike.id=:postId and l.type=:likeType")
					.setParameter("postId", postId)
					.setParameter("likeType", LikeType.post).getResultList();
			return likes;
		} catch (Exception e) {
			throw new ConnectinBaseException("Could not load likes: "+e.getMessage());

		}
	}
}
