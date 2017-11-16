package com.connectin.business.feed.dao;

import com.connectin.domain.feed.FeedDTO;
import com.connectin.exceptions.ConnectinBaseException;

public interface IFeedDao {
    FeedDTO getFeedByUserId(String userName) throws ConnectinBaseException;
}
