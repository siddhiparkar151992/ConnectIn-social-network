package com.talentale.business;

import java.sql.Date;
import java.util.List;

import com.talentale.domain.feed.FeedType;

public class Feed {
	private long id;
	private Date createdDate;
	private Date updatedDate;
	private FeedType feedType;
	private List<Post> posts;
	
	
}
