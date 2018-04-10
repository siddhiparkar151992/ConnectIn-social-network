package com.connectin.business.user.dao;

import com.connectin.business.generic.dao.DataAccessor;
import com.connectin.business.user.entity.User;
import com.connectin.business.user.repository.UserRepository;
import com.connectin.constants.Message;
import com.connectin.exceptions.ConnectinBaseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class UserDaoImpl implements IUserDao {

    @PersistenceContext
    EntityManager entityManager;

    @Autowired
    UserRepository userRepository;

    @Override
    public User getById(int id) throws ConnectinBaseException {
        try {
            User user = userRepository.getUserById(id);
            return user;
        } catch (Exception e) {
            throw new ConnectinBaseException(Message.DATA_NOT_FOUND);
        }
    }
    @Override
    public User getByName(String userName) throws ConnectinBaseException {
        try {
            User user = userRepository.getUserByName(userName);
            return user;
        } catch (Exception e) {
            throw new ConnectinBaseException("User with username "+ userName+" "+Message.DATA_NOT_FOUND);
        }
    }

    @Override
    public void insertUserAuthenticationDetails(String userName, String password, int userId) throws ConnectinBaseException {
        try {
        	int status = entityManager.
            createNativeQuery("insert into usr_auth(user_name, user_id,password) "
                    + "values(:userName,:userId,:password)")
            .setParameter("userName", userName)
            .setParameter("userId", userId)
            .setParameter("password", password)
            .executeUpdate();
        	if(status!=1){
        		throw new ConnectinBaseException("Please check username or password");
        	}
        } catch (Exception e) {
            throw new ConnectinBaseException("Could not create user account! Please check for user data.");
        }
    }


}
