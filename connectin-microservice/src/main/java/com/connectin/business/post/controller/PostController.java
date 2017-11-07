package com.connectin.business.post.controller;

import com.connectin.business.post.service.PostService;
import com.connectin.domain.post.PostDTO;
import com.connectin.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping(value = "/connectin/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @RequestMapping("/list")
    public Response<List<PostDTO>> getPostsByUser(@RequestParam int userId, HttpServletRequest request,
                                                  HttpServletResponse response) {
        String token = request.getHeader("token");
        Response<List<PostDTO>> postResponse = postService.getPostByUser(userId);
        return postResponse;

    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Response<String> addPostForUser(@RequestBody PostDTO post, @RequestParam("feedId") Integer feedId, HttpServletRequest httpServletRequest,
                                           HttpServletResponse httpServletResponse) {
        Response<String> response = postService.addPost(post, feedId);
        return response;
    }
}
