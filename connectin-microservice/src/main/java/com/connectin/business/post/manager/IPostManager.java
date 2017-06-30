package com.connectin.business.post.manager;

import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

public interface IPostManager {
    public List<PostDTO> populatePosts(int userId) throws ConnectinBaseException;

    public List<PostDTO> getPostsForUserFeed(int[] connections) throws ConnectinBaseException;
}
