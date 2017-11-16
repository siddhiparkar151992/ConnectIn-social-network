package com.connectin.business.feed.manager;

import com.connectin.business.feed.dao.IFeedDao;
import com.connectin.business.post.manager.IPostManager;
import com.connectin.business.user.connections.dao.IConnectionsDao;
import com.connectin.business.user.entity.User;
import com.connectin.domain.feed.FeedDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("feedManager")
public class FeedManagerImpl implements IFeedManager {

    @Autowired
    private IFeedDao feedDao;

    @Autowired
    private IConnectionsDao connectionDao;

    @Autowired
    private IPostManager postManager;

    @Override
    public FeedDTO getFeedByUser(String userName) throws ConnectinBaseException {
        FeedDTO feed = feedDao.getFeedByUserId(userName);
        List<User> connections = connectionDao.getConnectionByUserId(userName);
        List<String> userIds = new ArrayList<>();
        for (User user : connections) {
            userIds.add(user.getUserName());
        }
        userIds.add(userName);
        List<PostDTO> posts = postManager.getPostsForUserFeed(userIds);
        feed.setPosts(posts);
        return feed;
    }

}
