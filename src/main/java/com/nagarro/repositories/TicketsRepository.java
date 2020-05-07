package com.nagarro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.entities.Ticket;

@Repository
public interface TicketsRepository extends JpaRepository<Ticket, Long> {

}
