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
                            + "p.visibility, p.tags, p.createdTime, p.text, i.type,i.url, i.alt) "
                            + "from post p join  p.owner.profileImage i where p.owner.userName=:userName order by p.createdTime desc")
                    .setParameter("userName", userName).getResultList();
            return posts;
        } catch (Exception e) {
            throw new ConnectinBaseException("Could not load posts!"+e.getMessage());

        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PostDTO> getPostsByFeed(List<String> connections) throws ConnectinBaseException {
        List<PostDTO> posts = new ArrayList<>();
        try {
            posts = (List<PostDTO>) entityManager
                    .createQuery("select new com.connectin.domain.post.PostDTO(p.id, p.category.categoryName, "
                            + "p.visibility, p.tags, p.createdTime,p.text, u, p.owner.profileImage.type," +
                            "p.owner.profileImage.url, p.owner.profileImage.alt) "
                            + "from post p join p.owner u " +
                            "where p.owner.userName in (:users) " +
                            "order by p.createdTime desc").setParameter("users", connections).getResultList();
            return posts;
        } catch (Exception e) {
            throw new ConnectinBaseException("Could not load posts!");

        }
    }

    @Override
    public boolean checkIfPostBelongsToTheUser(int ownerId, int userId, int postId) {
        return false;
    }

    @Override
    public PostDTO getPostById(int postId) throws ConnectinBaseException {
        PostDTO post= null;
        try {
            post =  entityManager
                    .createQuery("select new com.connectin.domain.post.PostDTO(p.id, p.category.categoryName, "
                            + "p.visibility, p.tags, p.createdTime,p.text, u, p.owner.profileImage.type,p.owner.profileImage.url" +
                            ", p.owner.profileImage.alt) "
                            + "from post p join p.owner u" +
                            " where p.id=:postId", PostDTO.class).setParameter("postId", postId).getSingleResult();
            return post;
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
