package com.connectin.business.post.entity;

import com.connectin.business.comments.entity.Comment;
import com.connectin.business.feed.entity.Feed;
import com.connectin.business.images.entity.Image;
import com.connectin.business.likes.entity.Likes;
import com.connectin.business.user.entity.User;
import com.connectin.common.entity.Category;
import com.connectin.constants.Visibility;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Table
@Entity(name = "post")
public class Post implements Serializable {

    private static final long serialVersionUID = 1L;


    @Id
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Comment> comments;


    @OneToMany(mappedBy = "postLike", cascade = CascadeType.ALL)
    private List<Likes> likes;



    public List<Likes> getLikes() {
        return likes;
    }

    public void setLikes(List<Likes> likes) {
        this.likes = likes;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Enumerated(EnumType.STRING)
    @Column(name = "visibility", columnDefinition = "varchar(12)")
    private Visibility visibility;

    @Column(name = "tags")
    private String tags;

    @Column(name = "created_time")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdTime;

    @Column(name = "updated_time")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedTime;

    @ManyToOne
    @JoinColumn(name = "feed_id")
    private Feed feedId;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User ownerId;
    @Column(name = "text")
    private String text;

    public User getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(User ownerId) {
        this.ownerId = ownerId;
    }

    public Feed getFeedId() {
        return feedId;
    }

    public void setFeedId(Feed feedId) {
        this.feedId = feedId;
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

    public void setUser(User userId) {
        this.user = userId;
    }

    public Category getCategoryId() {
        return category;
    }

    public void setCategoryId(Category categoryId) {
        this.category = categoryId;
    }

    @Enumerated(EnumType.STRING)
    public Visibility getVisibility() {
        return visibility;
    }

    @Enumerated(EnumType.STRING)
    public void setVisibility(Visibility visibility) {
        this.visibility = visibility;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public Date getCreatedTime() {

        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public Date getUpdatedTime() {
        return updatedTime;
    }

    public void setUpdatedTime(Date updatedTime) {
        this.updatedTime = updatedTime;
    }

    public Feed getFeed() {
        return feedId;
    }

    public void setFeed(Feed feedId) {
        this.feedId = feedId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
