package com.connectin.business.feed.controller;

import com.connectin.business.feed.service.FeedService;
import com.connectin.domain.feed.FeedDTO;
import com.connectin.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(value = "/connectin/api/user/feed")
public class FeedController {

    @Autowired
    private FeedService feedService;

    @RequestMapping(value="", method = RequestMethod.POST)
    public Response<FeedDTO> getUserFeed(@RequestParam("userId") int userId, HttpServletRequest request,
                                         HttpServletResponse response) {
        Response<FeedDTO> feeds = feedService.getPostByUser(userId);
        return feeds;
    }
}
