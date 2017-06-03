package com.connectin.domain.post.comments;

import java.io.Serializable;
import java.sql.Date;

import com.connectin.domain.user.User;

public class Comment implements Serializable{
	private Long id;
	private Date createdDate;
	private User postedTo;
	private String text;
	/**
	 * @param id
	 * @param createdDate
	 * @param postedTo
	 * @param text
	 */
	public Comment(Long id, Date createdDate, User postedTo, String text) {
		super();
		this.id = id;
		this.createdDate = createdDate;
		this.postedTo = postedTo;
		this.text = text;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Comment [id=" + id + ", createdDate=" + createdDate + ", postedTo=" + postedTo + ", text=" + text + "]";
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createdDate == null) ? 0 : createdDate.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((postedTo == null) ? 0 : postedTo.hashCode());
		result = prime * result + ((text == null) ? 0 : text.hashCode());
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
		Comment other = (Comment) obj;
		if (createdDate == null) {
			if (other.createdDate != null)
				return false;
		} else if (!createdDate.equals(other.createdDate))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (postedTo == null) {
			if (other.postedTo != null)
				return false;
		} else if (!postedTo.equals(other.postedTo))
			return false;
		if (text == null) {
			if (other.text != null)
				return false;
		} else if (!text.equals(other.text))
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
	 * @return the postedTo
	 */
	public User getPostedTo() {
		return postedTo;
	}
	/**
	 * @param postedTo the postedTo to set
	 */
	public void setPostedTo(User postedTo) {
		this.postedTo = postedTo;
	}
	/**
	 * @return the text
	 */
	public String getText() {
		return text;
	}
	/**
	 * @param text the text to set
	 */
	public void setText(String text) {
		this.text = text;
	}
}
