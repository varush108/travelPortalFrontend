package com.nagarro.controllers;

import java.util.List;

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

import com.nagarro.entities.TicketDetails;
import com.nagarro.repositories.TicketDetailsRepository;


@RestController
@RequestMapping("/travelApi/v1")
public class TicketDetailsController {
	
	@Autowired
	private TicketDetailsRepository ticketDetailsRepository;
	
	/**
	 * Get the list of all ticketDetails
	 * @return
	 */
	@GetMapping("/ticketDetails")
	public List<TicketDetails> getAllTicketDetailss(){
		
		return ticketDetailsRepository.findAll();
		
	}
	
	/**
	 * Get ticketdetails by id
	 * @param ticketdetailsId
	 * @return ticket object associated with that id
	 * @throws ResourceAccessException
	 */
	@GetMapping("/ticketDetails/{id}")
	public ResponseEntity<TicketDetails> getTicketDetailsById
		(@PathVariable(value = "id") Long ticketdetailsId) 
				throws ResourceAccessException{
		
		TicketDetails ticketdetails =  
				ticketDetailsRepository
				.findById(ticketdetailsId)
				.orElseThrow(() -> 
				new ResourceAccessException("TicketDetails not found "
						+ "for id : "+ ticketdetailsId));
		
		return ResponseEntity.ok().body(ticketdetails); 
	}
	
	/**
	 * Create a new ticketdetails object
	 * @param ticket
	 * @return the newly created ticketdetails object
	 */
	@PostMapping("/ticketDetails")
	public TicketDetails createTicketDetails(@RequestBody TicketDetails details) {
		
	
		return ticketDetailsRepository.save(details);
	}
}
