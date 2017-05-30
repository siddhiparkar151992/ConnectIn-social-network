package com.connectin.domain.comments;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.user.UserDTO;

public class CommentDTO implements Serializable{

	private Date createdDate;
	private UserDTO user;
	private String text;
	private List<LikeDTO> likes;
	private int id;
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public UserDTO getUser() {
		return user;
	}
	public void setUser(UserDTO user) {
		this.user = user;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public List<LikeDTO> getLikes() {
		return likes;
	}
	public void setLikes(List<LikeDTO> likes) {
		this.likes = likes;
	}
	public CommentDTO(Date createdDate, UserDTO user, String text, List<LikeDTO> likes, int id) {
		super();
		this.createdDate = createdDate;
		this.user = user;
		this.text = text;
		this.likes = likes;
		this.id = id;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createdDate == null) ? 0 : createdDate.hashCode());
		result = prime * result + id;
		result = prime * result + ((likes == null) ? 0 : likes.hashCode());
		result = prime * result + ((text == null) ? 0 : text.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
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
		CommentDTO other = (CommentDTO) obj;
		if (createdDate == null) {
			if (other.createdDate != null)
				return false;
		} else if (!createdDate.equals(other.createdDate))
			return false;
		if (id != other.id)
			return false;
		if (likes == null) {
			if (other.likes != null)
				return false;
		} else if (!likes.equals(other.likes))
			return false;
		if (text == null) {
			if (other.text != null)
				return false;
		} else if (!text.equals(other.text))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "CommentDTO [createdDate=" + createdDate + ", user=" + user + ", text=" + text + ", likes=" + likes
				+ ", id=" + id + "]";
	}
	public CommentDTO(Date createdDate, UserDTO user, String text, int id) {
		super();
		this.createdDate = createdDate;
		this.user = user;
		this.text = text;
		this.id = id;
	}
	
	
}
