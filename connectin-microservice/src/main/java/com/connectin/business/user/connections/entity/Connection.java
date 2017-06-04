package com.connectin.business.user.connections.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;

import org.hibernate.jpamodelgen.xml.jaxb.TemporalType;

import com.connectin.business.user.entity.User;
import com.connectin.common.domain.AccountAvailibility;
import com.connectin.constants.Gender;
import com.connectin.domain.account.AccountType;


@Entity
@Table(name="connections")
public class Connection implements Serializable{
	@Id
	@Column(name="id")
	private int id;
	
	@ManyToOne
	@JoinColumn(name= "user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name= "conn_id")
	private User connection;
	
	public User getConnection() {
		return connection;
	}

	public void setConnection(User connection) {
		this.connection = connection;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
