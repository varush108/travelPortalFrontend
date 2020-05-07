package com.nagarro.utils;



import com.nagarro.entities.Ticket;
import com.nagarro.entities.TicketDetails;

public class RequestWrapper {
	
	private Ticket ticket;
	private TicketDetails ticketDetails;
	
	public Ticket getTicket() {
		return ticket;
	}
	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}
	public TicketDetails getTicketDetails() {
		return ticketDetails;
	}
	public void setTicketDetails(TicketDetails ticketDetails) {
		this.ticketDetails = ticketDetails;
	}
	
	

}
