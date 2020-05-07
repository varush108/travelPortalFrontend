package com.nagarro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nagarro.entities.TicketDetails;

@Repository
public interface TicketDetailsRepository extends JpaRepository<TicketDetails, Long> {

}
