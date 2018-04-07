/**
 *
 */
package com.connectin.business.comments.service;

import com.connectin.business.comments.dao.ICommentsDao;
import com.connectin.business.comments.entity.Comment;
import com.connectin.business.likes.entity.Likes;
import com.connectin.business.post.entity.Post;
import com.connectin.business.post.manager.IPostManager;
import com.connectin.business.user.connections.dao.IConnectionsDao;
import com.connectin.business.user.entity.User;
import com.connectin.constants.DateUtil;
import com.connectin.constants.Message;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.domain.post.PostDTO;
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

    @Autowired
    private IPostManager postManager;

    @Autowired
    private IConnectionsDao connectionsDao;
    @Override
    public Response<List<CommentDTO>> getCommentsByPostId(int postId, int userId) {
        List<CommentDTO> comments = null;
        ResponseGenerator<List<CommentDTO>> responseGenerator = new ResponseGenerator<>();
        try {

            PostDTO requiredPost = postManager.getPostById(postId);
            List<User> connections = connectionsDao.getConnectionsByUserId(requiredPost.getUser().getId());
            boolean hasAccess = false;
            for(User connection :connections){
                if(connection.getId() == userId){
                    hasAccess = true;
                }
            }
            if(requiredPost.getUser().getId() == userId || hasAccess){
                comments = commentsDao.getCommentsByPost(postId);
                for (CommentDTO commentDTO: comments) {

                }
                if (!comments.equals(null)) {

                    return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, comments);
                }
            }

        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, comments);
        }
        return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, comments);
    }

    private Comment constructEntity(CommentDTO commentDTO, int userId) throws ConnectinBaseException {
        DateFormat dateformat = new SimpleDateFormat(DateUtil.dateformat);
        Comment comment = new Comment();
        try {
            comment.setCreatedTime(dateformat.parse(commentDTO.getCreatedDate()));
            List<Likes> list = new ArrayList<>();
            Post post = new Post();
            post.setId(commentDTO.getPost().getId());
            comment.setPost(post);
            User user = new User();
            user.setId(userId);
            comment.setUser(user);
            comment.setLikes(list);
            comment.setText(commentDTO.getText());
            return comment;
        } catch (ParseException e) {
            throw new ConnectinBaseException("Invalid created date!");
        }
    }

    @Override
    public Response<Object> addComment(CommentDTO comment, int userId){
        ResponseGenerator<Object> responseGenerator = new ResponseGenerator<>();
        try {
            Comment commentEntity = constructEntity(comment, userId);
            commentsDao.addComment(commentEntity);
            return responseGenerator.generateSuccessResponse("Comment added!", Message.SUCCESS_CODE, null);
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, null);
        }
    }
}
