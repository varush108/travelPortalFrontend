package com.nagarro.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.nagarro.entities.TicketType;
import com.nagarro.repositories.TicketTypeRepository;

@RestController
@RequestMapping("/travelApi/v1")
public class TicketTypeController {
	
	@Autowired
	private TicketTypeRepository ticketTypeRepo;
	
	/**
	 * Get all the ticket type objects
	 * @return list of all ticket types
	 */
	@GetMapping("/ticketType")
	public List<TicketType> getAllTickets(){	
		return ticketTypeRepo.findAll();
		
	}
	
	/**
	 * Get ticket type by id
	 * @param ticketTypeID 
	 * @return ticket type object associated with the id
	 * @throws ResourceAccessException
	 */
	@GetMapping("ticketType/{id}")
	public TicketType getTicketType(@PathVariable(value = "id") Long ticketTypeID)
			throws ResourceAccessException{
		
		TicketType ticketType = 
				ticketTypeRepo
				.findById(ticketTypeID)
				.orElseThrow(() -> 
			    new ResourceAccessException("Cant find Tickettype:" + ticketTypeID));
		
		return ticketType;
		
	}
	
	/**
	 * 
	 * @param ticketType
	 * @return
	 */
    @RequestMapping(value="/ticketType", method=RequestMethod.POST)
	public TicketType createTicketType(@RequestBody TicketType ticketType) {
		
		return ticketTypeRepo.save(ticketType);
		
	}
	

}
