package com.nagarro.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "admins")
@EntityListeners(AuditingEntityListener.class)
public class Admins {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	@OneToOne
	@JoinColumn(name="user_id", referencedColumnName ="id")
	private User userid;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public User getUser_id() {
		return userid;
	}
	public void setUser_id(User user_id) {
		this.userid = user_id;
	}

}
