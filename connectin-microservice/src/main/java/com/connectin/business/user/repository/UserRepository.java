package com.connectin.business.user.repository;

/**
 * Created by Siddhi Parkar on 08-04-2018.
 */

import com.connectin.business.user.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("SELECT u from user u where userName=:userName")
    User getUserByName(@Param("userName") String userName);

    @Query("SELECT u from user u where id=:id")
    User getUserById(@Param("id") int id);
}

