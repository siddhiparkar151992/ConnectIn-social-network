package com.connectin.domain.comments;

import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.connectin.config.AppConfig;
import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.user.UserDTO;

public class CommentDTO implements Serializable{
	
	@Autowired
	private AppConfig appConfig;
	
	private String createdTime;
	private UserDTO user;
	private String text;
	private List<LikeDTO> likes;
	private int id;
	
	private DateFormat dateformat;
	
	public String getCreatedDate() {
		return createdTime;
	}
	public void setCreatedDate(String createdDate) {
		this.createdTime = createdDate;
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
		dateformat = new SimpleDateFormat("dd/MM/yyyy HH:MM:SS");
		this.createdTime = dateformat.format(createdDate);
		this.user = user;
		this.text = text;
		this.likes = likes;
		this.id = id;
	}
	
	public CommentDTO(Date createdDate, int userId, String firstName,String lastName,
			String email, String text, int id) {
		super();
		dateformat = new SimpleDateFormat("dd/MM/yyyy HH:MM:SS");
		this.createdTime = dateformat.format(createdDate);
		this.text = text;
		this.id = id;
		
		this.user = new UserDTO(userId, firstName, lastName, email);
	}
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createdTime == null) ? 0 : createdTime.hashCode());
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
		return "CommentDTO [createdDate=" + createdTime + ", user=" + user + ", text=" + text + ", likes=" + likes
				+ ", id=" + id + "]";
	}
	public CommentDTO(Date createdDate, UserDTO user, String text, int id) {
		super();
		this.createdTime = dateformat.format(createdDate);
		this.user = user;
		this.text = text;
		this.id = id;
	}
	
	
}
