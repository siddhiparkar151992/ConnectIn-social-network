package com.connectin.domain.employmenthistory.employment;

import java.sql.Date;
import java.util.List;

import com.connectin.domain.common.Achievement;
import com.connectin.domain.company.Company;
import com.connectin.domain.employmenthistory.EmploymentType;
import com.connectin.domain.project.Project;

public class Employment {
	private int id;
	private Company company;
	private List<Project> projects;
	private Date startDate;
	private EmploymentType empType;
	/**
	 * @param id
	 * @param company
	 * @param projects
	 * @param startDate
	 * @param empType
	 */
	public Employment(int id, Company company, List<Project> projects, Date startDate, EmploymentType empType) {
		super();
		this.id = id;
		this.company = company;
		this.projects = projects;
		this.startDate = startDate;
		this.empType = empType;
	}
	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}
	/**
	 * @return the company
	 */
	public Company getCompany() {
		return company;
	}
	/**
	 * @param company the company to set
	 */
	public void setCompany(Company company) {
		this.company = company;
	}
	/**
	 * @return the projects
	 */
	public List<Project> getProjects() {
		return projects;
	}
	/**
	 * @param projects the projects to set
	 */
	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}
	/**
	 * @return the startDate
	 */
	public Date getStartDate() {
		return startDate;
	}
	/**
	 * @param startDate the startDate to set
	 */
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	/**
	 * @return the empType
	 */
	public EmploymentType getEmpType() {
		return empType;
	}
	/**
	 * @param empType the empType to set
	 */
	public void setEmpType(EmploymentType empType) {
		this.empType = empType;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((company == null) ? 0 : company.hashCode());
		result = prime * result + ((empType == null) ? 0 : empType.hashCode());
		result = prime * result + id;
		result = prime * result + ((projects == null) ? 0 : projects.hashCode());
		result = prime * result + ((startDate == null) ? 0 : startDate.hashCode());
		return result;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employment other = (Employment) obj;
		if (company == null) {
			if (other.company != null)
				return false;
		} else if (!company.equals(other.company))
			return false;
		if (empType != other.empType)
			return false;
		if (id != other.id)
			return false;
		if (projects == null) {
			if (other.projects != null)
				return false;
		} else if (!projects.equals(other.projects))
			return false;
		if (startDate == null) {
			if (other.startDate != null)
				return false;
		} else if (!startDate.equals(other.startDate))
			return false;
		return true;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Employment [id=" + id + ", company=" + company + ", projects=" + projects + ", startDate=" + startDate
				+ ", empType=" + empType + "]";
	}
	
}
