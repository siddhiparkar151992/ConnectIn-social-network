/**
 *
 */
package com.connectin.business.post.dao;

import com.connectin.business.post.PostRepository;
import com.connectin.business.post.entity.Post;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    private PostRepository postRepository;

    public EntityManager getEntityManager() {
        return entityManager;
    }

    @Override
    public List<PostDTO> getPostsByUser(String userName) throws ConnectinBaseException {
        List<PostDTO> posts = new ArrayList<>();
        try {
            posts = postRepository.getPostsByUser(userName);
            return posts;
        } catch (Exception e) {
            throw new ConnectinBaseException("Could not load posts!" + e.getMessage());

        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<PostDTO> getPostsByFeed(List<String> connections) throws ConnectinBaseException {
        List<PostDTO> posts = new ArrayList<>();
        try {
            posts = postRepository.getPostsByFeed(connections);
            return posts;
        } catch (Exception e) {
            throw new ConnectinBaseException("Could not load posts!");

        }
    }

    @Override
    public PostDTO getPostById(int postId) throws ConnectinBaseException {
        PostDTO post = null;
        try {
            post = postRepository.getPostById(postId);
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
