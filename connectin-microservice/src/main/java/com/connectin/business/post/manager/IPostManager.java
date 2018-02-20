package com.connectin.business.post.manager;

import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

public interface IPostManager {
    List<PostDTO> populatePosts(String userName) throws ConnectinBaseException;

    boolean checkIfPostBelongsToTheUser(int userId, int postId);
    PostDTO getPostById(int postId) throws ConnectinBaseException;
    List<PostDTO> getPostsForUserFeed(List<String> connections) throws ConnectinBaseException;
    String addPost(PostDTO post, int feedId) throws ConnectinBaseException;
}
