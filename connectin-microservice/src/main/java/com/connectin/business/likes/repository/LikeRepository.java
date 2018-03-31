package com.connectin.business.likes.repository;

import com.connectin.business.likes.entity.Likes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Siddhi Parkar on 30-03-2018.
 */

@Repository
@Transactional
public interface LikeRepository extends CrudRepository<Likes, Integer> {

}
