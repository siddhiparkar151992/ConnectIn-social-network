package com.connectin.business.likes.service;

import com.connectin.domain.like.LikeDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;

import java.util.List;

public interface LikesService {
    Response<List<LikeDTO>> getLikesByPostId(int postId) throws ConnectinBaseException;

    Response<List<LikeDTO>> getLikesByCommentId(int commentId) throws ConnectinBaseException;
}
