package com.connectin.business.post.service;

import com.connectin.domain.post.PostDTO;
import com.connectin.utils.Response;

import java.util.List;

public interface PostService {
    public Response<List<PostDTO>> getPostByUser(int userId);

}
