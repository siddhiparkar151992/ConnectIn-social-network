package com.connectin.business.education.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.connectin.business.profile.entity.UserProfile;

@Table(name="edu_details")
@Entity
public class EducationDetails {
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="degree")
	private String degree;

	@Column(name="completion_dt")
	private Date completionDate;

	@Column(name="start_dt")
	private Date startDate;
	
	@ManyToOne
	@JoinColumn(name= "usr_prof_id")
	private UserProfile profile;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public Date getCompletionDate() {
		return completionDate;
	}

	public void setCompletionDate(Date completionDate) {
		this.completionDate = completionDate;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	
	

	
}
