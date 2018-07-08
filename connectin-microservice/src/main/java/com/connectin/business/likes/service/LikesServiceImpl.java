/**
 *
 */
package com.connectin.business.likes.service;

import com.connectin.business.likes.dao.ILikesDao;
import com.connectin.constants.Message;
import com.connectin.domain.like.LikeType;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Dell
 */
@Service("likesService")
public class LikesServiceImpl implements LikesService {
    @Autowired
    private ILikesDao likesDao;

    @Override
    public Response<String> likeComment(int commentId, int userId) {
        ResponseGenerator<String> responseGenerator = new ResponseGenerator<>();
        if (commentId < 0|| userId < 0) {
            return responseGenerator.generateErrorResponse("Comment id or user id cannot be null",
                    Message.ERROR_CODE, null);
        }
        try {
            likesDao.like(LikeType.comment, commentId, userId);
            return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, "");
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse("Could not like comment with id "+commentId,
                    Message.ERROR_CODE, null);
        }
    }

    @Override
    public Response<String> likePost(int postId, int userId) {
        ResponseGenerator<String> responseGenerator = new ResponseGenerator<>();
        if (postId < 0|| userId < 0) {
            return responseGenerator.generateErrorResponse("Post id or user id cannot be null",
                    Message.ERROR_CODE, null);
        }
        try {
            likesDao.like(LikeType.post, postId, userId);
            return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, "");
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse("Could not like post with id "+postId,
                    Message.ERROR_CODE, null);
        }
    }

}
