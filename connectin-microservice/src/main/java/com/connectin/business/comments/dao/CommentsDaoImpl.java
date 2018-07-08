/**
 *
 */
package com.connectin.business.comments.dao;

import com.connectin.business.comments.entity.Comment;
import com.connectin.business.comments.repository.CommentRepository;
import com.connectin.domain.comments.CommentDTO;
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
public class CommentsDaoImpl implements ICommentsDao {

    @PersistenceContext
    EntityManager entityManager;

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public List<CommentDTO> getCommentsByPost(int postId) throws ConnectinBaseException {
        List<CommentDTO> posts = new ArrayList<>();
        try {
            posts = commentRepository.getCommentsByPost(postId);
            return posts;
        } catch (Exception e) {
            throw new ConnectinBaseException("Could not load comments!");

        }
    }

    @Override
    public void addComment(Comment comment) throws ConnectinBaseException {
        List<CommentDTO> posts = new ArrayList<>();
        try {
            entityManager.persist(comment);
        } catch (Exception e) {
            throw new ConnectinBaseException("Could not add comment. Please try again!");

        }
    }
}
