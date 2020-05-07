package com.nagarro.entities;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;




@Entity
@Table(name = "ticket_type")
@EntityListeners(AuditingEntityListener.class)
public class TicketType {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "template_id", nullable = false)
    private int templateId;
    @OneToMany(cascade=CascadeType.ALL, mappedBy="type")
    private Set<Ticket> tickets = new HashSet<>();
    
    
    // Getters and Setters
    
	
	public void setTickets(Set<Ticket> tickets) {
		this.tickets = tickets;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getTemplateId() {
		return templateId;
	}
	public void setTemplateId(int templateId) {
		this.templateId = templateId;
	}
    
    

}
