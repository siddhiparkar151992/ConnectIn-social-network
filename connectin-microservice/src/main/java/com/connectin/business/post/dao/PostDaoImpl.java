/**
 *
 */
package com.connectin.business.post.dao;

import com.connectin.business.post.entity.Post;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
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
    public List<PostDTO> getPostsByUser(String userName) throws ConnectinBaseException {
        List<PostDTO> posts = new ArrayList<>();
        try {
            posts = (List<PostDTO>) entityManager
                    .createQuery("select new com.connectin.domain.post.PostDTO(p.id, p.category.categoryName, "
                            + "p.visibility, p.tags, p.createdTime, p.text) "
                            + "from post p where p.user.userName=:userName order by p.createdTime desc")
                    .setParameter("userName", userName).getResultList();
            return posts;
        } catch (Exception e) {
            throw new ConnectinBaseException("Could not load posts!");

        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PostDTO> getPostsByFeed(List<String> connections) throws ConnectinBaseException {
        List<PostDTO> posts = new ArrayList<>();
        try {
            posts = (List<PostDTO>) entityManager
                    .createQuery("select new com.connectin.domain.post.PostDTO(p.id, p.category.categoryName, "
                            + "p.visibility, p.tags, p.createdTime,p.text, u) "
                            + "from post p join p.user u where p.user.userName in (:users) order by p.createdTime desc").setParameter("users", connections).getResultList();
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
