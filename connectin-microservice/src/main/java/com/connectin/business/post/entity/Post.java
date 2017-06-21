package com.connectin.business.post.entity;

import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.connectin.business.comments.entity.Comment;
import com.connectin.business.feed.entity.Feed;
import com.connectin.business.likes.entity.Likes;
import com.connectin.business.user.entity.User;
import com.connectin.common.entity.Category;
import com.connectin.constants.Visibility;

@Table
@Entity(name = "post")
public class Post implements Serializable {

    private static final long serialVersionUID = 1L;
    
    
    @Id
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Comment> comments;

    @OneToMany(mappedBy = "postLike", cascade = CascadeType.ALL)
    private List<Likes> likes;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Enumerated(EnumType.STRING)
    @Column(name = "visibility", columnDefinition = "varchar(12)")
    private Visibility visibility;

    @Column(name = "tags")
    private String tags;

    @Column(name = "created_time")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdTime;

    @Column(name = "updated_time")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedTime;

    @ManyToOne
    @JoinColumn(name = "feed_id")
    private Feed feedId;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User ownerId;

    public User getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(User ownerId) {
        this.ownerId = ownerId;
    }

    @Column(name = "text")
    private String text;

    public Feed getFeedId() {
        return feedId;
    }

    public void setFeedId(Feed feedId) {
        this.feedId = feedId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User userId) {
        this.user = userId;
    }

    public Category getCategoryId() {
        return category;
    }

    public void setCategoryId(Category categoryId) {
        this.category = categoryId;
    }

    @Enumerated(EnumType.STRING)
    public Visibility getVisibility() {
        return visibility;
    }

    @Enumerated(EnumType.STRING)
    public void setVisibility(Visibility visibility) {
        this.visibility = visibility;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public Date getCreatedTime() {

        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public Date getUpdatedTime() {
        return updatedTime;
    }

    public void setUpdatedTime(Date updatedTime) {
        this.updatedTime = updatedTime;
    }

    public Feed getFeed() {
        return feedId;
    }

    public void setFeed(Feed feedId) {
        this.feedId = feedId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }


//	@Override
//	public String toString() {
//		return "Post [id=" + id + ", user=" + user + ", comments=" + comments + ", categoryId=" + categoryId
//				+ ", visibility=" + visibility + ", tags=" + tags + ", createdTime=" + createdTime + ", updatedTime="
//				+ updatedTime + ", feedId=" + feedId + ", text=" + text + "]";
//	}
//
//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = 1;
//		result = prime * result + ((categoryId == null) ? 0 : categoryId.hashCode());
//		result = prime * result + ((comments == null) ? 0 : comments.hashCode());
//		result = prime * result + ((createdTime == null) ? 0 : createdTime.hashCode());
//		result = prime * result + ((feedId == null) ? 0 : feedId.hashCode());
//		result = prime * result + id;
//		result = prime * result + ((tags == null) ? 0 : tags.hashCode());
//		result = prime * result + ((text == null) ? 0 : text.hashCode());
//		result = prime * result + ((updatedTime == null) ? 0 : updatedTime.hashCode());
//		result = prime * result + ((user == null) ? 0 : user.hashCode());
//		result = prime * result + ((visibility == null) ? 0 : visibility.hashCode());
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
//		Post other = (Post) obj;
//		if (categoryId == null) {
//			if (other.categoryId != null)
//				return false;
//		} else if (!categoryId.equals(other.categoryId))
//			return false;
//		if (comments == null) {
//			if (other.comments != null)
//				return false;
//		} else if (!comments.equals(other.comments))
//			return false;
//		if (createdTime == null) {
//			if (other.createdTime != null)
//				return false;
//		} else if (!createdTime.equals(other.createdTime))
//			return false;
//		if (feedId == null) {
//			if (other.feedId != null)
//				return false;
//		} else if (!feedId.equals(other.feedId))
//			return false;
//		if (id != other.id)
//			return false;
//		if (tags == null) {
//			if (other.tags != null)
//				return false;
//		} else if (!tags.equals(other.tags))
//			return false;
//		if (text == null) {
//			if (other.text != null)
//				return false;
//		} else if (!text.equals(other.text))
//			return false;
//		if (updatedTime == null) {
//			if (other.updatedTime != null)
//				return false;
//		} else if (!updatedTime.equals(other.updatedTime))
//			return false;
//		if (user == null) {
//			if (other.user != null)
//				return false;
//		} else if (!user.equals(other.user))
//			return false;
//		if (visibility != other.visibility)
//			return false;
//		return true;
//	}

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
