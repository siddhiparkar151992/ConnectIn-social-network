package com.connectin.business.project.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.connectin.business.employmenthistory.employment.entity.EmploymentHistory;

@Table(name="project")
@Entity
public class Project implements Serializable{
	
	@Id
	@Column
	private int id;
	
	@Column(name="title")
	private String title;
	
	@Column(name="start_dt")
	@Temporal(TemporalType.TIMESTAMP)
	private Date startDate;
	

	@Column(name="end_dt")
	@Temporal(TemporalType.TIMESTAMP)
	private Date endDate;
	
	@ManyToOne
	@JoinColumn(name = "emp_id")
	private EmploymentHistory employmentHistory;
	
	@Column(name="image_urls")
	private String imageUrl;
	
	@Column(name="func")
	private String functions;
	
	@Column(name="team_size")
	private int teamSize;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getFunctions() {
		return functions;
	}

	public void setFunctions(String functions) {
		this.functions = functions;
	}

	public int getTeamSize() {
		return teamSize;
	}

	public void setTeamSize(int teamSize) {
		this.teamSize = teamSize;
	}
	
	
}
