package com.nagarro.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.nagarro.utils.HashMapConverter;

@Entity
@Table(name = "ticket_details")
@EntityListeners(AuditingEntityListener.class)
public class TicketDetails {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	@Column(name = "details", nullable = false)
	@Convert(converter = HashMapConverter.class)
	private Map<String, Object> details;
	
	@Column(name = "comments",nullable = true)
	private String comments;
	
	@Column(name= "attachements",nullable =true)
	@ElementCollection
	private List<String> attachements = new ArrayList<String>();
	 
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="ticketID" , insertable=true,updatable = false)
	private Ticket ticket;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="updated_by" ,  updatable = false)
	private User user;
	
	@CreationTimestamp
	@Column(name="created_on",nullable=false)
	private Date createdOn;
	
	@CreationTimestamp
	@Column(name="modified_on",nullable = true)
	private Date modified_on;
	
	//getters and setters
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Map<String, Object> getDetails() {
		return details;
	}
	public void setDetails(Map<String, Object> details) {
		this.details = details;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	
	
	public List<String> getAttachements() {
		return attachements;
	}
	public void setAttachements(List<String> attachements) {
		this.attachements = attachements;
	}
	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}
	
	public String getUser() {
		if(this.user!=null) {
				return this.user.getFirstName()+" "+this.user.getLastName();
		
		}
		else 
			return "null";
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Date getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}
	public Date getModified_on() {
		return modified_on;
	}
	public void setModified_on(Date modified_on) {
		this.modified_on = modified_on;
	}
	
	
	
	
}
