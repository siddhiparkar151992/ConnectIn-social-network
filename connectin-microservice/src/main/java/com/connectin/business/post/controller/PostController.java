package com.connectin.business.post.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.connectin.business.post.entity.Post;
import com.connectin.business.post.service.PostService;
import com.connectin.domain.post.PostDTO;
import com.connectin.utils.Response;

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
}
