/**
 *
 */
package com.connectin.authenticate.dao;

import com.connectin.business.user.entity.UserCredentials;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

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
        try {
            UserCredentials user = (UserCredentials) this.em
                    .createQuery("SELECT v FROM UserCredentials v where v.userName=:user and password=:pwd")
                    .setParameter("user", username).setParameter("pwd", password).getSingleResult();
            return user;
        }catch(Exception e){
            return null;
        }
    }

    
}
