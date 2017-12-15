package com.connectin.business.comments.service;

import com.connectin.domain.comments.CommentDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;

import java.util.List;

public interface CommentService {
    Response<List<CommentDTO>> getCommentsByPostId(int postId, int userId);
    Response<Object> addComment(CommentDTO comment, int userId) ;
}
