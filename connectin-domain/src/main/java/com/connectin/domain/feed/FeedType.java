package com.connectin.domain.feed;

public enum FeedType {
	GROUP("Group"),
	USER_FEED("User feed"),
	COMPANY("Company"),
	NEWS("News");
	
	private String value;
	private FeedType(String value) {
		this.value = value;
	}
}
