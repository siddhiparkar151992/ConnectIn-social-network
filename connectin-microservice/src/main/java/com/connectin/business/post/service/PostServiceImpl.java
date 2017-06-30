package com.connectin.business.post.service;

import com.connectin.business.post.manager.IPostManager;
import com.connectin.constants.Message;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PostServiceImpl implements PostService {

    @Autowired
    IPostManager postManager;

    @Autowired
    ResponseGenerator<List<PostDTO>> responseGenerator;


    @Override
    public Response<List<PostDTO>> getPostByUser(int userId) {
        List<PostDTO> post = null;
        try {
            post = postManager.populatePosts(userId);

            if (!post.equals(null)) {

                return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, post);
            }
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, post);
        }
        return null;

    }


}
