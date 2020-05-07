package com.nagarro.entities;


import java.util.Date;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.persistence.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.nagarro.utils.HashMapConverter;


@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "firstName", nullable = false)
    private String firstName;
    @Column(name = "lastName", nullable = false)
    private String lastName;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "email", nullable = false,unique = true)
    private String email;
    @Column(name = "telephone", nullable = false)
    private String telephone;
    @Column(name = "password", nullable = true)
    private String password;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="businessUnitId" , updatable = false)
    private BusinessUnits businessUnitId;
    @OneToMany(cascade=CascadeType.ALL, mappedBy="user")
    private Set<Ticket> tickets = new HashSet<>();
    @OneToMany(cascade=CascadeType.ALL, mappedBy="user")
    private Set<TicketDetails> ticketDetails = new HashSet<>();
	@Column(name = "created_on", nullable = false)
    private Date created_on;
    @Column(name = "modified_on", nullable = true)
    private Date modified_on;
    @Column(name = "modified_by", nullable = true)
    private int modified_by;
    @OneToOne(mappedBy = "userid")
    private Admins admin; 
    @Column(name = "address", nullable = false)
    @Convert(converter = HashMapConverter.class)
    private Map<String, Object> address;	
    
    
    
    
	public void setTicketDetails(Set<TicketDetails> ticketDetails) {
		this.ticketDetails = ticketDetails;
	}
	public Set<Ticket> getTickets() {
		return tickets;
	}
	public void setTickets(Set<Ticket> tickets) {
		this.tickets = tickets;
	}
    public String getBusinessUnitId() {
    	if(businessUnitId!=null) {
		return businessUnitId.getName();
    	}
    	else {
    		return "null";
    	}
	}
	
	public void setAdmin(Admins admin) {
		this.admin = admin;
	}
	public Map<String, Object> getAddress() {
		return address;
	}
	public void setAddress(Map<String, Object> addressAttributes) {
		this.address = addressAttributes;
	}
	public void setBusinessUnitId(BusinessUnits businessUnitId) {
		this.businessUnitId = businessUnitId;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getCreated_on() {
		return created_on;
	}
	public void setCreated_on(Date created_on) {
		this.created_on = created_on;
	}
	public Date getModified_on() {
		return modified_on;
	}
	public void setModified_on(Date modified_on) {
		this.modified_on = modified_on;
	}
	public int getModified_by() {
		return modified_by;
	}
	public void setModified_by(int modified_by) {
		this.modified_by = modified_by;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", title=" + title
				+ ", email=" + email + ", telephone=" + telephone + ", address=" + address + ", password=" + password
				+ ", created_on=" + created_on + ", modified_on=" + modified_on + ", modified_by=" + modified_by + "]";
	}
    
    

    
  
}
   
