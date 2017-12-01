/**
 *
 */
package com.connectin.business.comments.service;

import com.connectin.business.comments.dao.ICommentsDao;
import com.connectin.business.comments.entity.Comment;
import com.connectin.business.likes.entity.Likes;
import com.connectin.business.post.entity.Post;
import com.connectin.business.user.entity.User;
import com.connectin.constants.DateUtil;
import com.connectin.constants.Message;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Dell
 */

@Service
public class CommentsServiceImpl implements CommentService {

    @Autowired
    private ICommentsDao commentsDao;

    @Override
    public Response<List<CommentDTO>> getCommentsByPostId(int postId) throws ConnectinBaseException {
        List<CommentDTO> post = null;
        ResponseGenerator<List<CommentDTO>> responseGenerator = new ResponseGenerator<>();
        try {
            post = commentsDao.getCommentsByPost(postId);

            if (!post.equals(null)) {

                return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, post);
            }
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, post);
        }
        return null;
    }

    private Comment constructEntity(CommentDTO commentDTO, String userName) throws ConnectinBaseException {
        DateFormat dateformat = new SimpleDateFormat(DateUtil.dateformat);
        Comment comment = new Comment();
        try {
            comment.setCreatedTime(dateformat.parse(commentDTO.getCreatedDate()));
            List<Likes> list = new ArrayList<>();
            Post post = new Post();
            post.setId(commentDTO.getPost().getId());
            comment.setPost(post);
            User user = new User();
            user.setUserName(userName);
            user.setId(commentDTO.getUser().getId());
            comment.setUser(user);
            comment.setLikes(list);
            comment.setText(commentDTO.getText());
            return comment;
        } catch (ParseException e) {
            throw new ConnectinBaseException("Invalid created date!");
        }
    }

    @Override
    public Response<Object> addComment(CommentDTO comment, String userName){
        ResponseGenerator<Object> responseGenerator = new ResponseGenerator<>();
        try {
            Comment commentEntity = constructEntity(comment, userName);
            commentsDao.addComment(commentEntity);
            return responseGenerator.generateSuccessResponse("Comment added!", Message.SUCCESS_CODE, null);
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, null);
        }
    }
}
