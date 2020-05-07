package com.nagarro.controllers;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
 
import com.nagarro.entities.EmailUser;
import com.nagarro.utils.MailService;

@RestController
@RequestMapping("/travelApi/v1")
public class MailController {

	@Autowired
	private MailService notificationService;

	

	/**
	 * 
	 * @return
	 * @throws MessagingException 
	 */
	@GetMapping("send-mail")
	public String send(@RequestParam(value="email") String email,
			@RequestParam(value="subject") String subject
			,@RequestParam(value="text") String text) throws MessagingException {

	
		try { 
			notificationService.sendEmail(email,subject,text);
		} catch (MailException mailException) {
			System.out.println(mailException);
		}
		return "Congratulations! Your mail has been send to the user.";
	}

	/**
	 * 
	 * @return
	 * @throws MessagingException
	 */
	@RequestMapping("send-mail-attachment")
	public String sendWithAttachment( @RequestBody EmailUser user) throws MessagingException {

		/*
		 * Creating a EmailUser with the help of EmailUser class that we have declared and setting
		 * Email address of the sender.
		 */
		user.setEmailAddress("varush108@gmail.com"); //Receiver's email address

		/*
		 * Here we will call sendEmailWithAttachment() for Sending mail to the sender
		 * that contains a attachment.
		 */
		try {
			notificationService.sendEmailWithAttachment(user);
		} catch (MailException mailException) {
			System.out.println(mailException);
		}
		return "Congratulations! Your mail has been send to the user.";
	}
}