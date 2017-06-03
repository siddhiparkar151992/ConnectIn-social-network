/**
 * 
 */
package com.connectin.business.comments.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.connectin.business.comments.dao.ICommentsDao;
import com.connectin.constants.Message;
import com.connectin.domain.comments.CommentDTO;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;

/**
 * @author Dell
 *
 */

@Service
public class CommentsServiceImpl implements CommentService {
	
	@Autowired
	private ICommentsDao commentsDao;
	
	@Autowired
	ResponseGenerator<List<CommentDTO>> responseGenerator;
	
	@Override
	public Response<List<CommentDTO>> getCommentsByPostId(int postId) throws ConnectinBaseException {
		List<CommentDTO> post = null;
		try {
			post = commentsDao.getCommentsByPost(postId);
			
			if(!post.equals(null)){
				
				return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, post);
			}
		} catch (ConnectinBaseException e) {
			return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, post);
		}
		return null;
	}
}
