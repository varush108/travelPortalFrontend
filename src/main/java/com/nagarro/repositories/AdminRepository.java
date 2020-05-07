package com.nagarro.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nagarro.entities.Admins;
import com.nagarro.entities.User;


@Repository
public interface AdminRepository extends JpaRepository<Admins, Long> {
	
	Page<Admins> findByuserid(@Param("userid") User user, Pageable pageable);
}