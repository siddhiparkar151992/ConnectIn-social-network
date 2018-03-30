package com.connectin.business.post.controller;

import com.connectin.business.post.service.PostService;
import com.connectin.domain.post.PostDTO;
import com.connectin.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(value = "/connectin/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @RequestMapping("/list")
    public Response<List<PostDTO>> getPostsByUser(HttpServletRequest request,
                                                  HttpServletResponse response) {
        User principal = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = principal.getUsername();
        Response<List<PostDTO>> postResponse = postService.getPostByUser(username);
        return postResponse;

    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Response<String> addPostForUser(@RequestBody PostDTO post, @RequestParam("feedId") Integer feedId, HttpServletRequest httpServletRequest,
                                           HttpServletResponse httpServletResponse) {
        Response<String> response = postService.addPost(post, feedId);
        return response;
    }
}
