/**
 *
 */
package com.connectin.authenticate.dao;

import com.connectin.authenticate.entity.user.UserCredentials;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * @author Dell
 */

@Repository
@Transactional
public class AuthenticationDaoImpl implements IAuthenticationDao {

    @PersistenceContext
    EntityManager em;

    @Override
    public UserCredentials login(String username, String password) {
        // where c.user_id ="+username+" and c.password=:password
        UserCredentials user = (UserCredentials) this.em
                .createQuery("SELECT v FROM UserCredentials v where v.userName=:user and password=:pwd")
                .setParameter("user", username).setParameter("pwd", password).getSingleResult();
        return user;
    }

    @Override
    public UserCredentials getById(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void update(UserCredentials t) {
        // TODO Auto-generated method stub

    }

    @Override
    public void delete(String id) {
        // TODO Auto-generated method stub

    }

    @Override
    public void delete(int id) {
        // TODO Auto-generated method stub

    }

    @Override
    public List<UserCredentials> getAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<UserCredentials> filter(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<UserCredentials> filter(int id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public UserCredentials getById(int id) {
        // TODO Auto-generated method stub
        return null;
    }

}
