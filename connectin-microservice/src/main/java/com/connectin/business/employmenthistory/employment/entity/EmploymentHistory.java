package com.connectin.business.employmenthistory.employment.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.connectin.business.profile.entity.UserProfile;
import com.connectin.business.project.entity.Project;
import com.connectin.domain.employmenthistory.EmploymentType;

@Table(name = "employment")
@Entity
public class EmploymentHistory implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "id")
	private int id;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "type", columnDefinition = "varchar(12)")
	private EmploymentType type;
	
	@Column(name = "start_dt")
	@Temporal(TemporalType.TIMESTAMP)
	private Date startDate;
	
	@Column(name = "end_dt")
	@Temporal(TemporalType.TIMESTAMP)
	private Date endDate;
	
	@Column(name = "achievement_title")
	private String achievmentTitle;
	
	@Column(name = "achievement_desc")
	private String achievmentDescription;
	
	@Enumerated(EnumType.STRING)
	public EmploymentType getType() {
		return type;
	}
	
	@Enumerated(EnumType.STRING)
	public void setType(EmploymentType type) {
		this.type = type;
	}

	@Column(name = "comp_name")
	private String companyName;
	
	@OneToMany(mappedBy = "employmentHistory", cascade = CascadeType.ALL)
	private List<Project> projects;
	
	@ManyToOne
	@JoinColumn(name = "prof_id")
	private UserProfile profiles;

	
	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public UserProfile getProfiles() {
		return profiles;
	}

	public void setProfiles(UserProfile profiles) {
		this.profiles = profiles;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getAchievmentTitle() {
		return achievmentTitle;
	}

	public void setAchievmentTitle(String achievmentTitle) {
		this.achievmentTitle = achievmentTitle;
	}

	public String getAchievmentDescription() {
		return achievmentDescription;
	}

	public void setAchievmentDescription(String achievmentDescription) {
		this.achievmentDescription = achievmentDescription;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}
