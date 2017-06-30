package com.connectin.business.user.connections.dao;

import com.connectin.business.user.entity.User;
import com.connectin.exceptions.ConnectinBaseException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class ConnectionDaoImpl implements IConnectionsDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<User> getConnectionByUserId(int userId) throws ConnectinBaseException {
        List<User> connections = new ArrayList<>();
        try {
            connections = (List<User>) entityManager.createQuery("select p.connection from Connection p where p.user.id=:userId")
                    .setParameter("userId", userId).getResultList();
            return connections;
        } catch (Exception e) {
            throw new ConnectinBaseException("Could not load posts!");

        }
    }


}
