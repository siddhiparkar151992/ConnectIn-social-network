package com.talentale.business.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.talentale.business.user.entity.UserCredentials;

@Repository("authRepository")
public interface AuthenticationRepository extends JpaRepository<UserCredentials, Long>{
	
	@Query("select a from usr_auth a where a.user=:userName and password=:password")
	public UserCredentials validateUser(@Param("userName") String userName, @Param("password") String password);
}
