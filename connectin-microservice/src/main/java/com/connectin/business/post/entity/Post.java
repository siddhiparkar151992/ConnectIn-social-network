package com.connectin.business.post.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.connectin.business.feed.entity.Feed;
import com.connectin.business.likes.entity.Likes;
import com.connectin.business.user.entity.User;
import com.connectin.common.entity.Category;
import com.connectin.constants.Visibility;
import com.connectin.data.converter.StringToListConverter;


@Table
@Entity(name="post")
public class Post implements Serializable{
	@Override
	public String toString() {
		return "Post [id=" + id + ", user=" + user + ", categoryId=" + categoryId + ", visibility=" + visibility
				+ ", tags=" + tags + ", createdTime=" + createdTime + ", updatedTime=" + updatedTime + ", feedId="
				+ feedId + ", text=" + text + "]";
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="id")
	private int id;
	
	@ManyToOne
	@JoinColumn(name= "user_id")
	private User user;
	
	
	@ManyToOne
	@JoinColumn(name="category_id")
	private Category categoryId;
	
	@Enumerated(EnumType.STRING)
	@Column(name="visibility", columnDefinition="varchar(12)")
	private Visibility visibility;
	
	@Column(name="tags")
	private String tags;
	
	
	@Column(name="created_time")
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdTime;
	
	@Column(name="updated_time")
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedTime;
	
	@ManyToOne
	@JoinColumn(name="feed_id")
	private Feed feedId;
	
	@Column(name="text")
	private String text;
	
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
		return categoryId;
	}

	public void setCategoryId(Category categoryId) {
		this.categoryId = categoryId;
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
}
