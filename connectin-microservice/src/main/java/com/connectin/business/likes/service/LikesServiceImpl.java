/**
 *
 */
package com.connectin.business.likes.service;

import com.connectin.domain.like.LikeDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Dell
 */
@Repository
@Transactional
public class LikesServiceImpl implements LikesService {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public Response<List<LikeDTO>> getLikesByPostId(int postId) throws ConnectinBaseException {
        List<LikeDTO> comments = new ArrayList<>();
        try {

        } catch (Exception e) {
            throw new ConnectinBaseException("Could not load posts!");

        }
        return null;
    }

    @Override
    public Response<List<LikeDTO>> getLikesByCommentId(int commentId) throws ConnectinBaseException {
        // TODO Auto-generated method stub
        return null;
    }
}
