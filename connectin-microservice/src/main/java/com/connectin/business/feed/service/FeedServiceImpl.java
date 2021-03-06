package com.connectin.business.feed.service;

import com.connectin.business.feed.manager.IFeedManager;
import com.connectin.constants.Message;
import com.connectin.domain.feed.FeedDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class FeedServiceImpl implements FeedService {

    @Autowired
    IFeedManager feedManager;

    @Override
    public Response<FeedDTO> getPostByUser(String userName) {
        FeedDTO post = null;
        ResponseGenerator<FeedDTO> responseGenerator = new ResponseGenerator<>();
        try {
            post = feedManager.getFeedByUser(userName);

            if (!post.equals(null)) {

                return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, post);
            }
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, post);
        }
        return null;

    }


}
