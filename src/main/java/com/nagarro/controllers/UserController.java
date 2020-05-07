package com.nagarro.controllers;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;
import java.util.List;
import java.util.Locale;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;
import com.nagarro.entities.User;
import com.nagarro.repositories.UserRepository;
import com.nagarro.utils.ConfigParams;
import com.nagarro.utils.PasswordGenerator;


@RestController
@RequestMapping("/travelApi/v1")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	/** 
	 * Get all users list.
	 * 
	 * @return the list of all the user objects or empty list if no user exist
	*/
	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUsers() {
		return ResponseEntity.ok().body(userRepository.findAll());
	}
	
	/**
	 * Get the user object for a specific user id
	 * @param usserID 
	 * @return the user object of that id or null if doesnt exist
	 * @throws ResourceAccessException
	 */
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUser(@PathVariable(value = "id") Long userId) 
			throws ResourceAccessException{
		User user =
				userRepository
				.findById(userId)
				.orElseThrow(() -> 
				new ResourceAccessException("User not found for id : "+ userId));    
		
		return ResponseEntity.ok().headers(ConfigParams.getHeaders()).body(user); 
	}
	
	/**
	 * Get the user for a specified email
	 * @param email of the user
	 * @return the user object associated with that email or null if doesnt exist
	 * @throws ResourceAccessException
	 */
	@GetMapping("/userByEmail")
	public ResponseEntity<User> getUserByEmail(@RequestParam(value = "email") 
			String email) throws IndexOutOfBoundsException{
		
	
		
		try{
			User user =
		
				userRepository
				.findByEmail(email, PageRequest.of(0, 1)).getContent().get(0);
			return ResponseEntity.ok().body(user);
		} catch(IndexOutOfBoundsException ex) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
	}
	
	/**
	 * Posts a new user into the database
	 * @param user object as JSON
	 * @return the newly created user object
	 */ 
	
	@PostMapping("/users")
	public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
		
		try{
			user.setPassword(PasswordGenerator.generatePassword(8));
		
		 
		return ResponseEntity.ok().body(userRepository.save(user));
		}catch(Exception ex) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
    }
}
