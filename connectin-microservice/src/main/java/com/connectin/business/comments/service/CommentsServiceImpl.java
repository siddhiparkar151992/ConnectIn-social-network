/**
 *
 */
package com.connectin.business.comments.service;

import com.connectin.business.comments.dao.ICommentsDao;
import com.connectin.constants.Message;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Dell
 */

@Service
public class CommentsServiceImpl implements CommentService {

    @Autowired
    ResponseGenerator<List<CommentDTO>> responseGenerator;
    @Autowired
    private ICommentsDao commentsDao;

    @Override
    public Response<List<CommentDTO>> getCommentsByPostId(int postId) throws ConnectinBaseException {
        List<CommentDTO> post = null;
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
}
