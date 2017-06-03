package com.connectin.domain.feed;

import java.sql.Date;
import java.util.List;

import com.connectin.domain.post.PostDTO;

public class FeedDTO {
	private long id;
	private Date createdDate;
	private Date updatedDate;
	private FeedType feedType;
	private List<PostDTO> posts;
	/**
	 * @param id
	 * @param createdDate
	 * @param updatedDate
	 * @param feedType
	 * @param posts
	 */
	public FeedDTO(long id, Date createdDate, Date updatedDate, FeedType feedType, List<PostDTO> posts) {
		super();
		this.id = id;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
		this.feedType = feedType;
		this.posts = posts;
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
	public void setId(long id) {
		this.id = id;
	}
	/**
	 * @return the createdDate
	 */
	public Date getCreatedDate() {
		return createdDate;
	}
	/**
	 * @param createdDate the createdDate to set
	 */
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	/**
	 * @return the updatedDate
	 */
	public Date getUpdatedDate() {
		return updatedDate;
	}
	/**
	 * @param updatedDate the updatedDate to set
	 */
	public void setUpdatedDate(Date updatedDate) {
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

