package com.connectin.domain.education;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import com.connectin.business.images.entity.Image;
import com.connectin.business.post.entity.Post;
import com.connectin.business.profile.entity.UserProfile;

public class EducationDTO {
	
	private int id;

	private String degree;

	
	private Date completionDate;

	
	private Date startDate;
	
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

	public EducationDTO(int id, String degree, Date completionDate, Date startDate) {
		super();
		this.id = id;
		this.degree = degree;
		this.completionDate = completionDate;
		this.startDate = startDate;
	}
	
	

	
}
