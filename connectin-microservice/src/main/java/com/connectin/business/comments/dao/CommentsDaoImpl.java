/**
 *
 */
package com.connectin.business.comments.dao;

import com.connectin.business.comments.entity.Comment;
import com.connectin.domain.comments.CommentDTO;
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
public class CommentsDaoImpl implements ICommentsDao {

    @PersistenceContext
    EntityManager entityManager;


    @Override
    public List<CommentDTO> getCommentsByPost(int postId) throws ConnectinBaseException {
        List<CommentDTO> posts = new ArrayList<>();
        try {
            posts = (List<CommentDTO>) entityManager.createQuery("select new com.connectin.domain.comments.CommentDTO("
                    + "c.createdTime,u.id,u.firstName,"
                    + "u.lastName,u.email,c.text,c.id, i.type,i.url, i.alt) "
                    + "from comments c join c.user u join c.post as p left join c.user.profileImage as i where p.id=:postId")
                    .setParameter("postId", postId).getResultList();
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
