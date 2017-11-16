package com.connectin.business.feed.controller;

import com.connectin.authenticate.entity.User;
import com.connectin.business.feed.service.FeedService;
import com.connectin.domain.feed.FeedDTO;
import com.connectin.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
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
    public Response<FeedDTO> getUserFeed(HttpServletRequest request,
                                         HttpServletResponse response) {
        User principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = principal.getUsername();
        Response<FeedDTO> feeds = feedService.getPostByUser(username);
        return feeds;
    }
}
