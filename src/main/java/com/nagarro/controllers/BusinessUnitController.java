package com.nagarro.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;
import com.nagarro.entities.BusinessUnits;
import com.nagarro.repositories.BusinessUnitRepository;
import com.nagarro.utils.ConfigParams;

@RestController
@RequestMapping("/travelApi/v1")
public class BusinessUnitController {
	@Autowired
	private BusinessUnitRepository BUrepo;
	
	/**
	 * Get all the business units details
	 * 
	 * @return list of all the business units objects
	 */
	@GetMapping("/BusinessUnits")
	public ResponseEntity<List<BusinessUnits>> getAllBusinessUnits() {
		
		return ResponseEntity.ok().body(BUrepo.findAll());
	}
	
	/**
	 * Inserts a new Business Unit object in database
	 * 
	 * @param Business Unit name in JSON format
	 * 
	 * @return newly created Business Unit object
	 */
	@PostMapping("/BusinessUnits")
	public BusinessUnits createBusinessUnit(@Valid @RequestBody BusinessUnits BU) {	
	
		return BUrepo.save(BU);  
	}
	
	/**
	 * Get a businessUnit object by ID
	 * 
	 * @param id the businessunit id 
	 * 
	 * @return the businessunit object corresponding to the {id}
	 * 
	 * @throws ResourceAccessException
	 */
	@GetMapping("/BusinessUnits/{id}")
	public ResponseEntity<BusinessUnits> getBusinessunit(@PathVariable(value = "id") 
			Long buID) throws ResourceAccessException{
		
		BusinessUnits BU=
				BUrepo
				.findById(buID)
			    .orElseThrow(() -> 
			    new ResourceAccessException("User not found on : " + buID));
		return ResponseEntity.ok().body(BU);  
	
	}

}
