package com.connectin.business.feed.manager;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.connectin.business.feed.dao.IFeedDao;
import com.connectin.business.post.dao.IPostDao;
import com.connectin.business.post.manager.IPostManager;
import com.connectin.business.user.connections.dao.IConnectionsDao;
import com.connectin.business.user.entity.User;
import com.connectin.domain.feed.FeedDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;

@Service("feedManager")
public class FeedManagerImpl implements IFeedManager{
	
	@Autowired
	private IFeedDao feedDao;
	
	@Autowired
	private IConnectionsDao connectionDao;
	
	@Autowired
	private IPostManager postManager;
	
	@Override
	public FeedDTO getFeedByUser(int userId) throws ConnectinBaseException {
		FeedDTO feed = feedDao.getFeedByUserId(userId);
		List<User> connections = connectionDao.getConnectionByUserId(userId);
		int[] userIds=  new int[connections.size()];
		for(User user: connections){
			userIds[userIds.length-1] = user.getId();
		}
		List<PostDTO> posts = postManager.getPostsForUserFeed(userIds);
		feed.setPosts(posts);
		return feed;
	}

}
