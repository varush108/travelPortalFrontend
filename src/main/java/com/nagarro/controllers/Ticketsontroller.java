package com.nagarro.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.nagarro.entities.Ticket;
import com.nagarro.entities.TicketDetails;
import com.nagarro.repositories.TicketDetailsRepository;
import com.nagarro.repositories.TicketsRepository;
import com.nagarro.utils.RequestWrapper;

@RestController
@RequestMapping("/travelApi/v1")
public class Ticketsontroller {
	
	@Autowired
	private TicketsRepository ticketRepository;
	
	@Autowired
	private TicketDetailsRepository ticketDetailsRepository;
	
	/**
	 * Get the list of all tickets
	 * @return
	 */
	@GetMapping("/tickets")
	public List<Ticket> getAllTickets(){
		
		return ticketRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
		
	}
	
	/**
	 * Get ticket by id
	 * @param ticketId
	 * @return ticket object associated with that id
	 * @throws ResourceAccessException
	 */
	@GetMapping("/tickets/{id}")
	public ResponseEntity<Ticket> getTicketById(@PathVariable(value = "id") 
		Long ticketId) throws ResourceAccessException{
		
		Ticket ticket =  
				ticketRepository
				.findById(ticketId)
				.orElseThrow(() -> 
				new ResourceAccessException("Ticket not found for id : "+ ticketId));
		
		return ResponseEntity.ok().body(ticket); 
	}
	
	/**
	 * Create a new ticket
	 * @param ticket
	 * @return the newly created ticket object
	 */
	@PostMapping("/tickets")
	public ResponseEntity<Ticket> createTicket(@RequestBody RequestWrapper requestWrapper) {
		Ticket ticket = requestWrapper.getTicket();
		ticketRepository.save(ticket);
		TicketDetails details = requestWrapper.getTicketDetails();
		details.setTicket(ticket);
		ticketDetailsRepository.save(details); 
		ticket.setTicketDetails(ticket.getTicketDetails());
		return ResponseEntity.ok().body(ticket);
	}
}
