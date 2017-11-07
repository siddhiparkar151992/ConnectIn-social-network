package com.connectin.business.post.manager;

import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

public interface IPostManager {
    List<PostDTO> populatePosts(int userId) throws ConnectinBaseException;

    List<PostDTO> getPostsForUserFeed(int[] connections) throws ConnectinBaseException;
    String addPost(PostDTO post, int feedId) throws ConnectinBaseException;
}
