package com.connectin.business.comments.entity;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
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
import com.connectin.business.post.entity.Post;
import com.connectin.business.user.entity.User;
import com.connectin.common.entity.Category;
import com.connectin.constants.Visibility;


@Table
@Entity(name="comments")
public class Comment implements Serializable{
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
	
	@OneToMany(mappedBy = "comment", cascade = CascadeType.ALL)
	private List<Likes> likes;  
	
	@Column(name="created_timestamp")
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdTime;
	
	@ManyToOne
	@JoinColumn(name= "post_id")
	private Post post;
	
	
	@Column(name="text")
	private String text;
	
//	@Override
//	public String toString() {
//		return "Comment [id=" + id + ", user=" + user + ", createdTime=" + createdTime + ", post=" + post + ", text="
//				+ text + ", likes=" + likes + "]";
//	}
//
//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = 1;
//		result = prime * result + ((createdTime == null) ? 0 : createdTime.hashCode());
//		result = prime * result + id;
//		result = prime * result + ((likes == null) ? 0 : likes.hashCode());
//		result = prime * result + ((post == null) ? 0 : post.hashCode());
//		result = prime * result + ((text == null) ? 0 : text.hashCode());
//		result = prime * result + ((user == null) ? 0 : user.hashCode());
//		return result;
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Comment other = (Comment) obj;
//		if (createdTime == null) {
//			if (other.createdTime != null)
//				return false;
//		} else if (!createdTime.equals(other.createdTime))
//			return false;
//		if (id != other.id)
//			return false;
//		if (likes == null) {
//			if (other.likes != null)
//				return false;
//		} else if (!likes.equals(other.likes))
//			return false;
//		if (post == null) {
//			if (other.post != null)
//				return false;
//		} else if (!post.equals(other.post))
//			return false;
//		if (text == null) {
//			if (other.text != null)
//				return false;
//		} else if (!text.equals(other.text))
//			return false;
//		if (user == null) {
//			if (other.user != null)
//				return false;
//		} else if (!user.equals(other.user))
//			return false;
//		return true;
//	}

	

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

	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Collection getLikes() {
		return likes;
	}

	public void setLikes(List<Likes> likes) {
		this.likes = likes;
	}

	
	
}

