package com.connectin.business.post.manager;

import com.connectin.business.comments.dao.ICommentsDao;
import com.connectin.business.feed.entity.Feed;
import com.connectin.business.likes.dao.ILikesDao;
import com.connectin.business.post.dao.IPostDao;
import com.connectin.business.post.entity.Post;
import com.connectin.common.entity.Category;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.domain.like.LikeDTO;
import com.connectin.domain.post.PostDTO;
import com.connectin.exceptions.ConnectinBaseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostManagerImpl implements IPostManager {

    @Autowired
    private IPostDao postDao;

    @Autowired
    private ICommentsDao commentsDao;

    @Autowired
    private ILikesDao likesDao;

    @Override
    public List<PostDTO> populatePosts(int userId) throws ConnectinBaseException {
        List<PostDTO> posts = postDao.getPostsByUser(userId);
        return this.populatePostWithComments(posts);
    }

    private Post constructPostEntity(PostDTO post, int feedId) throws ConnectinBaseException {
        Post postEntity = new Post();
        Category category = new Category();
        category.setCategoryId(1);
        postEntity.setCategoryId(category);
        postEntity.setComments(new ArrayList());
        postEntity.setCreatedTime(post.getCreatedTime());
        postEntity.setUpdatedTime(post.getCreatedTime());
        Feed feed = new Feed();
        feed.setId(feedId);
        postEntity.setFeed(feed);
        postEntity.setOwnerId(post.getUser());
        postEntity.setTags(post.getTags());
        postEntity.setVisibility(post.getVisibility());
        postEntity.setUser(post.getUser());
        return postEntity;
    }

    private List<CommentDTO> getCommentsByPost(int postId) throws ConnectinBaseException {
        List<CommentDTO> comments = commentsDao.getCommentsByPost(postId);
        return comments;

    }

    private List<LikeDTO> getLikesPerPost(int postId) throws ConnectinBaseException {
        List<LikeDTO> likes = likesDao.getLikesbyPost(postId);
        return likes;
    }

    private List<PostDTO> populatePostWithComments(List<PostDTO> posts) throws ConnectinBaseException {
        for (PostDTO post : posts) {
            List<CommentDTO> comments = this.getCommentsByPost(post.getId());
            List<LikeDTO> likes = this.getLikesPerPost(post.getId());
            post.setLikes(likes);
            post.setComments(comments);
        }
        return posts;
    }

    @Override
    public List<PostDTO> getPostsForUserFeed(int[] connections) throws ConnectinBaseException {
        List<PostDTO> posts = postDao.getPostsByFeed(connections);
        return this.populatePostWithComments(posts);

    }

    @Override
    public String addPost(PostDTO post, int feedId) throws ConnectinBaseException {
        try{
            constructPostEntity(post, feedId);
        }catch (ConnectinBaseException e) {
            return "adding post failed "+e.getMessage();
        }
        return "Success";
    }
}
