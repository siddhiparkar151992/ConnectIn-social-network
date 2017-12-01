package com.connectin.business.comments.dao;

import com.connectin.business.comments.entity.Comment;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;

public interface ICommentsDao {
    List<CommentDTO> getCommentsByPost(int postId) throws ConnectinBaseException;
    void addComment(Comment comment) throws ConnectinBaseException;
}
