package com.connectin.domain.post;

import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.connectin.business.user.entity.User;
import com.connectin.config.AppConfig;
import com.connectin.constants.Visibility;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.domain.like.LikeDTO;

public class PostDTO implements Serializable{
	@Autowired
	private AppConfig appConfig;
	
	private int id;
	private String category;
	private Visibility visibility;
	private String tags;
	private List<CommentDTO> comments;
	private String createdTime;
	private List<LikeDTO> likes;
	private String text;
	private User user;
	private DateFormat dateformat;
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getCreatedTime() {
		return createdTime;
	}
	public void setCreatedTime(String createdTime) {
		this.createdTime = createdTime;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	@Override
	public String toString() {
		return "PostDTO [id=" + id + ", category=" + category + ", visibility=" + visibility + ", tags=" + tags
				+ ", comments=" + comments + ", creadteDate=" + createdTime + ", likes=" + likes + "]";
	}
	public PostDTO(int id, String category, Visibility visibility, String tags, Date creadteDate, String text, User user) {
		super();
		dateformat = new SimpleDateFormat("dd/MM/yyyy HH:MM:SS");
		this.id = id;
		this.category = category;
		this.visibility = visibility;
		this.tags = tags;
		this.createdTime = dateformat.format(creadteDate);
		this.text = text;
		this.user = user;
	}
	
	public PostDTO(int id, String category, Visibility visibility, String tags, List<CommentDTO> comments,
			Date creadteDate, List<LikeDTO> likes) {
		super();
		dateformat = new SimpleDateFormat("dd/MM/yyyy HH:MM:SS");
		this.id = id;
		this.category = category;
		this.visibility = visibility;
		this.tags = tags;
		this.comments = comments;
		this.createdTime = dateformat.format(creadteDate);
		this.likes = likes;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((category == null) ? 0 : category.hashCode());
		result = prime * result + ((comments == null) ? 0 : comments.hashCode());
		result = prime * result + ((createdTime == null) ? 0 : createdTime.hashCode());
		result = prime * result + id;
		result = prime * result + ((likes == null) ? 0 : likes.hashCode());
		result = prime * result + ((tags == null) ? 0 : tags.hashCode());
		result = prime * result + ((visibility == null) ? 0 : visibility.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PostDTO other = (PostDTO) obj;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (comments == null) {
			if (other.comments != null)
				return false;
		} else if (!comments.equals(other.comments))
			return false;
		if (createdTime == null) {
			if (other.createdTime != null)
				return false;
		} else if (!createdTime.equals(other.createdTime))
			return false;
		if (id != other.id)
			return false;
		if (likes == null) {
			if (other.likes != null)
				return false;
		} else if (!likes.equals(other.likes))
			return false;
		if (tags == null) {
			if (other.tags != null)
				return false;
		} else if (!tags.equals(other.tags))
			return false;
		if (visibility != other.visibility)
			return false;
		return true;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Visibility getVisibility() {
		return visibility;
	}
	public void setVisibility(Visibility visibility) {
		this.visibility = visibility;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public Collection getComments() {
		return comments;
	}
	public void setComments(List<CommentDTO> comments) {
		this.comments = comments;
	}
	public String getCreadteDate() {
		return createdTime;
	}
	public void setCreadteDate(String creadteDate) {
		this.createdTime = creadteDate;
	}
	public Collection getLikes() {
		return likes;
	}
	public void setLikes(List<LikeDTO> likes) {
		this.likes = likes;
	}
	
	
}
