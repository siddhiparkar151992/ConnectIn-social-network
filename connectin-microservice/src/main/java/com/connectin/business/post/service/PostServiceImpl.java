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
    private IPostManager postManager;


    @Override
    public Response<List<PostDTO>> getPostByUser(int userId) {
        List<PostDTO> post = null;
        ResponseGenerator<List<PostDTO>> responseGenerator = new ResponseGenerator<>();
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

    @Override
    public Response<String> addPost(PostDTO post, int feedId) {
        String result = null;
        ResponseGenerator<String> responseGenerator = new ResponseGenerator<>();
        try {
            result = postManager.addPost(post, feedId);

            if (!post.equals(null)) {

                return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, result);
            }
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, result);
        }
        return null;

    }
}
