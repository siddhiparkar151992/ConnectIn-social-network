package com.connectin.business.likes.repository;

import com.connectin.business.likes.entity.Likes;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Siddhi Parkar on 30-03-2018.
 */

@Repository
@Transactional
public interface LikeRepository extends CrudRepository<Likes, Integer> {
    @Query("SELECT CASE when count(id) > 0 then true else false end from likes where post_id=:postId and user_id=:userId")
    boolean isPostLikedByUser(@Param("userId")int userId, @Param("postId")int postId);

    @Query("SELECT CASE when count(id) > 0 then true else false end from likes where comment_id=:commentId and user_id=:userId")
    boolean isCommentLikedByUser(@Param("userId") int userId,@Param("commentId") int commentId);
}
