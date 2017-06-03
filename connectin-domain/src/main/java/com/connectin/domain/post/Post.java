package com.connectin.domain.post;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import com.connectin.domain.common.Category;
import com.connectin.domain.post.comments.Comment;
import com.connectin.domain.user.User;

public class Post implements Serializable{
	private Long id;
	private Category category;
	private PostVisibilityType visibility;
	private List<String> tags;
	private List<Comment> comments;
	private User user;
	private Date creadteDate;
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Post [id=" + id + ", category=" + category + ", visibility=" + visibility + ", tags=" + tags
				+ ", comments=" + comments + ", user=" + user + ", creadteDate=" + creadteDate + "]";
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((category == null) ? 0 : category.hashCode());
		result = prime * result + ((comments == null) ? 0 : comments.hashCode());
		result = prime * result + ((creadteDate == null) ? 0 : creadteDate.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((tags == null) ? 0 : tags.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		result = prime * result + ((visibility == null) ? 0 : visibility.hashCode());
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
		Post other = (Post) obj;
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
		if (creadteDate == null) {
			if (other.creadteDate != null)
				return false;
		} else if (!creadteDate.equals(other.creadteDate))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (tags == null) {
			if (other.tags != null)
				return false;
		} else if (!tags.equals(other.tags))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		if (visibility != other.visibility)
			return false;
		return true;
	}
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * @return the category
	 */
	public Category getCategory() {
		return category;
	}
	/**
	 * @param category the category to set
	 */
	public void setCategory(Category category) {
		this.category = category;
	}
	/**
	 * @return the visibility
	 */
	public PostVisibilityType getVisibility() {
		return visibility;
	}
	/**
	 * @param visibility the visibility to set
	 */
	public void setVisibility(PostVisibilityType visibility) {
		this.visibility = visibility;
	}
	/**
	 * @return the tags
	 */
	public List<String> getTags() {
		return tags;
	}
	/**
	 * @param tags the tags to set
	 */
	public void setTags(List<String> tags) {
		this.tags = tags;
	}
	/**
	 * @return the comments
	 */
	public List<Comment> getComments() {
		return comments;
	}
	/**
	 * @param comments the comments to set
	 */
	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}
	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}
	/**
	 * @return the creadteDate
	 */
	public Date getCreadteDate() {
		return creadteDate;
	}
	/**
	 * @param creadteDate the creadteDate to set
	 */
	public void setCreadteDate(Date creadteDate) {
		this.creadteDate = creadteDate;
	}
	/**
	 * @param id
	 * @param category
	 * @param visibility
	 * @param tags
	 * @param comments
	 * @param user
	 * @param creadteDate
	 */
	public Post(Long id, Category category, PostVisibilityType visibility, List<String> tags, List<Comment> comments,
			User user, Date creadteDate) {
		super();
		this.id = id;
		this.category = category;
		this.visibility = visibility;
		this.tags = tags;
		this.comments = comments;
		this.user = user;
		this.creadteDate = creadteDate;
	}
}
