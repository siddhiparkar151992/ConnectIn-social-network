package com.connectin.business.comments;

import com.connectin.authenticate.entity.User;
import com.connectin.business.comments.service.CommentService;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Siddhi Parkar on 26-11-2017.
 */

@RestController
@RequestMapping("connectin/api/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Response<Object> addComment(@RequestBody CommentDTO comment, HttpServletRequest request, HttpServletResponse response){
        Response<Object> serviceResponse = null;
        User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = principal.getUsername();
        serviceResponse = commentService.addComment(comment, username);
        return serviceResponse;
    }
}
