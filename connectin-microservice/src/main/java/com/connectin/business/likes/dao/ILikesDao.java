package com.connectin.business.likes.dao;

import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.like.LikeType;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

public interface ILikesDao {
    List<LikeDTO> getLikesbyPost(int postId) throws ConnectinBaseException;
    void like(LikeType type, int commentId, int userId) throws ConnectinBaseException;
    List<LikeDTO> getLikesByComments(int commentId) throws ConnectinBaseException;
}

