package com.connectin.business.likes;

import com.connectin.authenticate.entity.User;
import com.connectin.business.likes.dao.ILikesDao;
import com.connectin.business.likes.service.LikesService;
import com.connectin.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

/**
 * Created by Siddhi Parkar on 30-03-2018.
 */
@RestController
@RequestMapping(value = "/connectin/api/user/likes")
public class LikeController {
    @Autowired
    private LikesService likesService;

    @RequestMapping(value = "/add/comment/{commentId}", method = RequestMethod.POST)
    public Response<String> like(@PathVariable("commentId") int commentId){
        User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        int user= principal.getId();
        Response<String> response = likesService.likeComment(commentId, user);
        return response;
    }

    @RequestMapping(value = "/add/post/{postId}", method = RequestMethod.POST)
    public Response<String> likePost(@PathVariable("postId") int postId){
        User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        int user= principal.getId();
        Response<String> response = likesService.likePost(postId, user);
        return response;
    }
}
