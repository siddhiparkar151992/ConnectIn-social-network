package com.connectin.business.likes.service;

import com.connectin.domain.like.LikeDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;

import java.util.List;

public interface LikesService {
    Response<String> likeComment(int commentId, int userId);
    Response<String> likePost(int postId, int userId);
}
