package com.connectin.business.images.entity;

import com.connectin.business.post.entity.Post;
import com.connectin.business.user.entity.User;
import com.connectin.constants.ImageOwnerType;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;


@Table
@Entity(name = "image_db")
public class Image {
    @Id
    @Column(name = "id")
    private int id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "type", columnDefinition = "varchar(20)")
    @Enumerated(EnumType.STRING)
    private ImageOwnerType type;


    @Column(name = "url")
    private String url;

    @Column(name = "alt")
    private String alt;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Post getPost() {
        return post;
    }

    @JsonIgnore
    public void setPost(Post post) {
        this.post = post;
    }

    public User getUserId() {
        return user;
    }
    @JsonIgnore
    public void setUserId(User userId) {
        this.user = userId;
    }

    @Enumerated(EnumType.STRING)
    public ImageOwnerType getType() {
        return type;
    }

    @Enumerated(EnumType.STRING)
    public void setType(ImageOwnerType type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getAlt() {
        return alt;
    }

    public void setAlt(String alt) {
        this.alt = alt;
    }

}
