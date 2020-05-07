package com.nagarro.controllers;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;
import com.nagarro.entities.Admins;
import com.nagarro.entities.User;
import com.nagarro.repositories.AdminRepository;

@RestController
@RequestMapping("/travelApi/v1")
public class AdminController {
  @Autowired
  private AdminRepository adminRepository;
  
  @Autowired 
  private UserController userController;
  
  /** 
   * Get all admins list.
   *
   * @return the admin list
   */
  @GetMapping("/admin")
  public List<Admins> getAllAdminss() {
	  
    return adminRepository.findAll();
    
  }
  
  /** 
   * Get admin by id.
   *
   * @return the admin details
   */
  @GetMapping("/admin/{id}")
  public ResponseEntity<Admins> getAdmins(@PathVariable(value = "id") Long adminId)
		  throws ResourceAccessException{
	  
	  //get admin object if exists for the {id} or throw an exception
	  Admins admin =
		        adminRepository
		            .findById(adminId) 
		            .orElseThrow(() -> 
		            new ResourceAccessException("No admin exist with id : " 
		            + adminId));
	  
	  return ResponseEntity.ok().body(admin);  
		    
  }
  
  
  /** 
   * Get admin by email.
   *
   * @return the admin details
   */
  @GetMapping("/adminByEmail")
  public ResponseEntity<Admins> getAdminByEmail(@RequestParam(value = "email") 
  		String email) throws ResourceAccessException{
	  

      User user = userController.getUserByEmail(email).getBody();
	  
      try{
    	  Admins admin =
      
			  adminRepository
		            .findByuserid(user, PageRequest.of(0, 1)).getContent().get(0);
	  
	  return ResponseEntity.ok().body(admin);  
      }catch(IndexOutOfBoundsException ex) {
    	  return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    	  
      }
		
  }
  
  
  /** 
   * Post a new Admin
   *
   * @return the newly added admin details
   */

  @PostMapping("/admin")
  public Admins createAdmins(@Valid @RequestBody Admins admin) {
	
    return adminRepository.save(admin);
  }
}
