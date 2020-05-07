package com.nagarro.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nagarro.entities.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	Page<User> findByEmail(@Param("email") String email, Pageable pageable);
	
}