package com.nagarro.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;


@Entity
@Table(name = "businessUnits")
@EntityListeners(AuditingEntityListener.class)

public class BusinessUnits {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "name", nullable = false)
    private String name;
    @OneToMany(cascade=CascadeType.ALL, mappedBy="businessUnitId")
    private Set<User> user = new HashSet<>();
	
	public void setUser(Set<User> user) {
		this.user = user;
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
	
	
    
}
