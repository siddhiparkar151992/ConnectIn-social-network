package com.connectin.business.likes.repository;

import com.connectin.business.likes.entity.Likes;
import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.like.LikeType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Siddhi Parkar on 30-03-2018.
 */

@Repository
@Transactional
public interface LikeRepository extends CrudRepository<Likes, Integer> {
    @Query("SELECT CASE when count(id) > 0 then true else false end from likes where post_id=:postId and user_id=:userId")
    boolean isPostLikedByUser(@Param("userId") int userId, @Param("postId") int postId);

    @Query("SELECT CASE when count(id) > 0 then true else false end from likes where comment_id=:commentId and user_id=:userId")
    boolean isCommentLikedByUser(@Param("userId") int userId, @Param("commentId") int commentId);

    @Query("select new " + "com.connectin.domain.like.LikeDTO(l.id, l.user.id, "
            + "l.user.firstName,l.user.lastName,l.user.email,l.createdTime, l.type, l.user.profileImage.url," +
            " l.user.profileImage.alt, l.user.profileImage.type) "
            + "from likes l where l.comment.id=:commentId and l.type=:likeType")
    List<LikeDTO> getLikesByComments(@Param("commentId") int commentId, @Param("likeType") LikeType likeType);
}
