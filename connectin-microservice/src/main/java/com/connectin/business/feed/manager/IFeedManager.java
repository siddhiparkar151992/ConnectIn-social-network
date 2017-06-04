package com.connectin.business.feed.manager;

import com.connectin.business.feed.entity.Feed;
import com.connectin.domain.feed.FeedDTO;
import com.connectin.exceptions.ConnectinBaseException;


public interface IFeedManager {
	FeedDTO getFeedByUser(int userId) throws ConnectinBaseException;
}
