package com.nagarro.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;


@Entity
@Table(name = "tickets")
@EntityListeners(AuditingEntityListener.class)
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="userId" , updatable = false)
	private User user;
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="typeID" , updatable = false)
	private TicketType type;
	@CreationTimestamp
	@Column(name="created_on", nullable= false)
	private Date created_on;
	@OneToMany(cascade=CascadeType.ALL, mappedBy="ticket")
	private Set<TicketDetails> ticketDetails = new HashSet<>();

	public Set<TicketDetails> getTicketDetails() {
		return ticketDetails;
	}

	public void setTicketDetails(Set<TicketDetails> ticketDetails) {
		this.ticketDetails = ticketDetails;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUser() {
		 return this.user.getFirstName()+" "+this.user.getLastName();
		
	}
	
	public String getUserBusinessUnit() {
		return this.user.getBusinessUnitId();
	}

	public void setUser(User user) {
		this.user = user;
	}

	public TicketType getType() {
		return type;
	}

	public void setType(TicketType type) {
		this.type = type;
	}

	public Date getCreated_on() {
		return created_on;
	}

	public void setCreated_on(Date created_on) {
		this.created_on = created_on;
	}
	
	
	

}
