package com.connectin.business.feed.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;

import com.connectin.domain.feed.FeedType;

@Entity
@Table(name = "feeds")
public class Feed implements Serializable {
	@Id
	@Column(name = "id", columnDefinition = "int(11)")
	private int id;

	@Enumerated(EnumType.STRING)
	@Column(name = "feed_type", columnDefinition = "varchar(20)")
	private FeedType feedType;

	@Column(name = "created_date")
	@Temporal(javax.persistence.TemporalType.TIMESTAMP)
	private Date createdDate;

	@Column(name = "updated_date")
	@Temporal(javax.persistence.TemporalType.TIMESTAMP)
	private Date updatedDate;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public FeedType getFeedType() {
		return feedType;
	}

	public void setFeedType(FeedType feedType) {
		this.feedType = feedType;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

}
