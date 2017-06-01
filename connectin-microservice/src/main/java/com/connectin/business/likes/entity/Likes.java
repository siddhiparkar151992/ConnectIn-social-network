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


//	@Override
//	public String toString() {
//		return "Likes [id=" + id + ", user=" + user + ", createdTime=" + createdTime + "]";
//	}
//
//
//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = 1;
//		result = prime * result + ((createdTime == null) ? 0 : createdTime.hashCode());
//		result = prime * result + id;
//		result = prime * result + ((user == null) ? 0 : user.hashCode());
//		return result;
//	}
//
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Likes other = (Likes) obj;
//		if (createdTime == null) {
//			if (other.createdTime != null)
//				return false;
//		} else if (!createdTime.equals(other.createdTime))
//			return false;
//		if (id != other.id)
//			return false;
//		if (user == null) {
//			if (other.user != null)
//				return false;
//		} else if (!user.equals(other.user))
//			return false;
//		return true;
//	}
	
	
}

