package com.connectin.business.comments;

import com.connectin.authenticate.entity.User;
import com.connectin.business.comments.service.CommentService;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

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
        int userId = principal.getId();
        serviceResponse = commentService.addComment(comment, userId);
        return serviceResponse;
    }

    @RequestMapping(value="/", method = RequestMethod.POST)
    public Response<List<CommentDTO>> getCommentsBypost(@RequestParam("postId") int postId, HttpServletResponse response, HttpServletRequest request){
        Response<List<CommentDTO>> serviceResponse = null;
        User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        int userId = principal.getId();
        serviceResponse = commentService.getCommentsByPostId(postId, userId);
        return serviceResponse;
    }
}
