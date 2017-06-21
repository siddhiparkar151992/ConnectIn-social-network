package com.connectin.domain.feed;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.connectin.config.AppConfig;
import com.connectin.domain.post.PostDTO;

public class FeedDTO {
	
	@Autowired
	private AppConfig appConfig;
	
	private int id;
	private String createdDate;
	private String updatedDate;
	private FeedType feedType;
	private List<PostDTO> posts;
	
	private DateFormat dateformat;
	/**
	 * @param id
	 * @param createdDate
	 * @param updatedDate
	 * @param feedType
	 * @param posts
	 */
	public FeedDTO(int id, Date createdDate, Date updatedDate, FeedType feedType, List<PostDTO> posts) {
		super();
		dateformat = new SimpleDateFormat(appConfig.getDateFormat());
		this.id = id;
		this.createdDate = dateformat.format(createdDate);
		this.updatedDate = dateformat.format(updatedDate);
		this.feedType = feedType;
		this.posts = posts;
	}
	public FeedDTO() {
		// TODO Auto-generated constructor stub
	}
	public FeedDTO(int id, Date createdDate, Date updatedDate, FeedType feedType) {
		super();
		dateformat = new SimpleDateFormat("dd/MM/yyyy HH:MM:SS");
		this.id = id;
		this.createdDate = dateformat.format(createdDate);
		this.updatedDate = dateformat.format(updatedDate);
		this.feedType = feedType;
	}
	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}
	/**
	 * @return the createdDate
	 */
	public String getCreatedDate() {
		return createdDate;
	}
	/**
	 * @param createdDate the createdDate to set
	 */
	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}
	/**
	 * @return the updatedDate
	 */
	public String getUpdatedDate() {
		return updatedDate;
	}
	/**
	 * @param updatedDate the updatedDate to set
	 */
	public void setUpdatedDate(String updatedDate) {
		this.updatedDate = updatedDate;
	}
	/**
	 * @return the feedType
	 */
	public FeedType getFeedType() {
		return feedType;
	}
	/**
	 * @param feedType the feedType to set
	 */
	public void setFeedType(FeedType feedType) {
		this.feedType = feedType;
	}
	/**
	 * @return the posts
	 */
	public List<PostDTO> getPosts() {
		return posts;
	}
	/**
	 * @param posts the posts to set
	 */
	public void setPosts(List<PostDTO> posts) {
		this.posts = posts;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createdDate == null) ? 0 : createdDate.hashCode());
		result = prime * result + ((feedType == null) ? 0 : feedType.hashCode());
		result = prime * result + (int) (id ^ (id >>> 32));
		result = prime * result + ((posts == null) ? 0 : posts.hashCode());
		result = prime * result + ((updatedDate == null) ? 0 : updatedDate.hashCode());
		return result;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FeedDTO other = (FeedDTO) obj;
		if (createdDate == null) {
			if (other.createdDate != null)
				return false;
		} else if (!createdDate.equals(other.createdDate))
			return false;
		if (feedType != other.feedType)
			return false;
		if (id != other.id)
			return false;
		if (posts == null) {
			if (other.posts != null)
				return false;
		} else if (!posts.equals(other.posts))
			return false;
		if (updatedDate == null) {
			if (other.updatedDate != null)
				return false;
		} else if (!updatedDate.equals(other.updatedDate))
			return false;
		return true;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Feed [id=" + id + ", createdDate=" + createdDate + ", updatedDate=" + updatedDate + ", feedType="
				+ feedType + ", posts=" + posts + "]";
	}
	
	
}

