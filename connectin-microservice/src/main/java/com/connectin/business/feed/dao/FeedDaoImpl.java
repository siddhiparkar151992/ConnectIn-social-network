/**
 * 
 */
package com.connectin.business.feed.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.connectin.business.feed.entity.Feed;
import com.connectin.business.generic.dao.DataAccessor;
import com.connectin.business.post.entity.Post;
import com.connectin.domain.feed.FeedDTO;
import com.connectin.exceptions.ConnectinBaseException;

/**
 * @author Dell
 *
 */

@Repository
@Transactional
public class FeedDaoImpl  extends DataAccessor<Feed> implements IFeedDao{
	
	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	public FeedDTO getFeedByUserId(int userId) throws ConnectinBaseException {
		FeedDTO feed;
		try{
			feed = (FeedDTO) entityManager.createQuery("select new com.connectin.domain.feed.FeedDTO("
					+ "p.id, p.createdDate, p.updatedDate, p.feedType)"
					+ " from Feed p where p.user.id=:userId").setParameter("userId", userId).getSingleResult();
			return feed;
		}catch(Exception e){
			throw new ConnectinBaseException("Could not load feed!");
			
		}
	}
	
	
	
	@Override
	public Feed getById(int id) throws ConnectinBaseException {
		Feed feed = new Feed();
		try{
			feed = (Feed) entityManager.createQuery("select p from feed p where p.id=:id")
					.setParameter("userId", id);
			return feed;
		}catch(Exception e){
			throw new ConnectinBaseException("Could not load feed!");
			
		}
	}

	@Override
	public Feed getById(String id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Feed t) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(String id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(int id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Feed> getAll() throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Feed> filter(String id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Feed> filter(int id) throws ConnectinBaseException {
		// TODO Auto-generated method stub
		return null;
	}

	

}
