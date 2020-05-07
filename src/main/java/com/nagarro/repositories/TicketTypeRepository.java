package com.nagarro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nagarro.entities.TicketType;

@Repository
public interface TicketTypeRepository extends JpaRepository<TicketType, Long> {

}