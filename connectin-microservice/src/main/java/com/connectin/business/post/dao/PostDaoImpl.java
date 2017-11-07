/**
 *
 */
package com.connectin.business.post.dao;

import com.connectin.business.feed.entity.Feed;
import com.connectin.business.post.entity.Post;
import com.connectin.common.entity.Category;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author Dell
 */
@Repository
@Transactional
public class PostDaoImpl implements IPostDao {

    @PersistenceContext
    EntityManager entityManager;

    public EntityManager getEntityManager() {
        return entityManager;
    }
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
            List<Integer> selectedValues = Arrays.asList(1, 2);
            posts = (List<PostDTO>) entityManager
                    .createQuery("select new com.connectin.domain.post.PostDTO(p.id, p.category.categoryName, "
                            + "p.visibility, p.tags, p.createdTime,p.text, u) "
                            + "from post p join p.user u where p.user.id in (:users)").setParameter("users", selectedValues).getResultList();
            return posts;
        } catch (Exception e) {
            throw new ConnectinBaseException("Could not load posts!");

        }
    }

    @Override
    @Transactional
    public String addPost(Post postEntity, int feedId) {
        entityManager.persist(postEntity);
        return new String("Success");
    }
}
