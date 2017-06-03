package com.connectin.business.likes.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.connectin.business.comments.entity.Comment;
import com.connectin.business.feed.entity.Feed;
import com.connectin.business.post.entity.Post;
import com.connectin.business.user.entity.User;
import com.connectin.common.entity.Category;
import com.connectin.constants.Visibility;
import com.connectin.domain.like.LikeType;


@Table
@Entity(name="likes")
public class Likes implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="id")
	private int id;
	
	@ManyToOne
	@JoinColumn(name= "post_id")
	private Post postLike;
	
	@ManyToOne
	@JoinColumn(name= "comment_id")
	private Comment comment;
	
	@ManyToOne
	@JoinColumn(name= "user_id")
	private User user;
	
	@Column(name="type", columnDefinition = "varchar(11)")
	@Enumerated(EnumType.STRING)
	private LikeType type;
	
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


	@Column(name="created_timestamp")
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdTime;


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


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	
	
}

