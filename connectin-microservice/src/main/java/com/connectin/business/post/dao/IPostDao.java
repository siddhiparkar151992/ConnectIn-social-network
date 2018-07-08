package com.connectin.business.post.dao;

import com.connectin.business.post.entity.Post;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

public interface IPostDao {
    List<PostDTO> getPostsByUser(String userName) throws ConnectinBaseException;

    List<PostDTO> getPostsByFeed(List<String> connections) throws ConnectinBaseException;

    PostDTO getPostById(int postId) throws ConnectinBaseException;

    String addPost(Post post, int feedId) throws ConnectinBaseException;
}
