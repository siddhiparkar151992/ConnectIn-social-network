/**
 * 
 */
package com.connectin.business.post.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;

/**
 * @author Dell
 *
 */
@Repository
@Transactional
public class PostDaoImpl implements IPostDao {

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public List<PostDTO> getPostsByUser(int userId) throws ConnectinBaseException {
		List<PostDTO> posts = new ArrayList<>();
		try {
			posts = (List<PostDTO>) entityManager
					.createQuery("select new com.connectin.domain.post.PostDTO(p.id, p.category.categoryName, "
							+ "p.visibility, p.tags, p.createdTime, p.text) "
							+ "from post p where p.user.id=:userId")
					.setParameter("userId", userId).getResultList();
			return posts;
		} catch (Exception e) {
			throw new ConnectinBaseException("Could not load posts!");

		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<PostDTO> getPostsByFeed(int[] connections) throws ConnectinBaseException {
		List<PostDTO> posts = new ArrayList<>();
		try {
			List<Integer> selectedValues = Arrays.asList(1,2);
			posts = (List<PostDTO>) entityManager
					.createQuery("select new com.connectin.domain.post.PostDTO(p.id, p.category.categoryName, "
							+ "p.visibility, p.tags, p.createdTime,p.text, u) "
							+ "from post p join p.user u where p.user.id in (:users)").setParameter("users", selectedValues).getResultList();
			return posts;
		} catch (Exception e) {
			throw new ConnectinBaseException("Could not load posts!");

		}
	}
}
