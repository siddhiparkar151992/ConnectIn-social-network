package com.connectin.domain.employmenthistory.employment;

import java.util.Date;
import java.util.List;

import com.connectin.domain.employmenthistory.EmploymentType;
import com.connectin.domain.project.ProjectDTO;

public class EmploymentHistoryDTO {
	private int id;
	private String companyName;
	private List<ProjectDTO> projects;
	private Date startDate;
	private Date endDate;
	private String achievmentTitle;
	private String achievmentDescription;
	private EmploymentType type;
	
	
	public EmploymentHistoryDTO(int id, String companyName, Date startDate, Date endDate, String achievmentTitle,
			String achievmentDescription, EmploymentType type) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.achievmentTitle = achievmentTitle;
		this.achievmentDescription = achievmentDescription;
		this.type = type;
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
	public List<ProjectDTO> getProjects() {
		return projects;
	}
	public void setProjects(List<ProjectDTO> projects) {
		this.projects = projects;
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
	
}
