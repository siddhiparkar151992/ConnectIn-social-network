package com.connectin.business.likes.dao;

import com.connectin.domain.like.LikeDTO;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

public interface ILikesDao {
    List<LikeDTO> getLikesbyPost(int postId) throws ConnectinBaseException;

    List<LikeDTO> getLikesByComments(int commentId) throws ConnectinBaseException;
}

