package com.connectin.business.images.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.connectin.business.post.entity.Post;
import com.connectin.business.profile.entity.UserProfile;
import com.connectin.business.user.entity.User;
import com.connectin.constants.ImageOwnerType;


@Table
@Entity(name="image_db")
public class Image {
	@Id
	@Column(name="id")
	private int id;
	
	@ManyToOne
	@JoinColumn(name= "post_id")
	private Post post;
	
	
	@ManyToOne
	@JoinColumn(name= "user_id")
	private User user;
	
	@Column(name="type", columnDefinition = "varchar(20)")
	@Enumerated(EnumType.STRING)
	private ImageOwnerType type;
	
	
	@Column(name="url")
	private String url;
	
	@Column(name="alt")
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

	public void setPost(Post post) {
		this.post = post;
	}

	public User getUserId() {
		return user;
	}

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
