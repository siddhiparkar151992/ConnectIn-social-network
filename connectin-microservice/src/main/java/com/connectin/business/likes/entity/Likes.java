package com.connectin.business.likes.entity;

import com.connectin.business.comments.entity.Comment;
import com.connectin.business.post.entity.Post;
import com.connectin.business.user.entity.User;
import com.connectin.domain.like.LikeType;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Table
@Entity(name = "likes")
public class Likes implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post postLike;

    @ManyToOne
    @JoinColumn(name = "comment_id")
    private Comment comment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "type", columnDefinition = "varchar(11)")
    @Enumerated(EnumType.STRING)
    private LikeType type;
    @Column(name = "created_timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdTime;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Post getPostLike() {
        return postLike;
    }

    public void setPostLike(Post postLike) {
        this.postLike = postLike;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    public LikeType getType() {
        return type;
    }

    public void setType(LikeType type) {
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }


}

