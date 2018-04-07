package com.connectin.business.comments.repository;

import com.connectin.business.comments.entity.Comment;
import com.connectin.domain.comments.CommentDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Siddhi Parkar on 01-04-2018.
 */
@Repository
@Transactional
public interface CommentRepository extends JpaRepository<Comment, Integer> {
    @Query("select new com.connectin.domain.comments.CommentDTO("
            + "c.createdTime,u.id,u.firstName,"
            + "u.lastName,u.email,c.text,c.id, i.type,i.url, i.alt) "
            + "from comments c join c.user u join c.post as p left join c.user.profileImage as i where p.id=:postId")
    List<CommentDTO> getCommentsByPost(@Param("postId") int postId);
}
