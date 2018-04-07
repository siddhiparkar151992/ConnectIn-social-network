package com.connectin.business.post;

import com.connectin.business.post.entity.Post;
import com.connectin.domain.post.PostDTO;
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
public interface PostRepository extends JpaRepository<Post, Integer> {
    @Query("select new com.connectin.domain.post.PostDTO(p.id, p.category.categoryName, "
            + "p.visibility, p.tags, p.createdTime, p.text, i.type,i.url, i.alt) "
            + "from post p join  p.owner.profileImage i where p.owner.userName=:userName order by p.createdTime desc")
    List<PostDTO> getPostsByUser(@Param("userName") String userName);

    @Query("select new com.connectin.domain.post.PostDTO(p.id, p.category.categoryName, "
            + "p.visibility, p.tags, p.createdTime,p.text, u, p.owner.profileImage.type," +
            "p.owner.profileImage.url, p.owner.profileImage.alt) "
            + "from post p join p.owner u " +
            "where p.owner.userName in (:users) " +
            "order by p.createdTime desc")
    List<PostDTO> getPostsByFeed(@Param("users") List<String> connections);

    @Query("select new com.connectin.domain.post.PostDTO(p.id, p.category.categoryName, "
            + "p.visibility, p.tags, p.createdTime,p.text, u, p.owner.profileImage.type,p.owner.profileImage.url" +
            ", p.owner.profileImage.alt) "
            + "from post p join p.owner u" +
            " where p.id=:postId")
    PostDTO getPostById(@Param("postId") int postId);
}
