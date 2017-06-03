package com.connectin.business.profile.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.connectin.business.education.entity.EducationDetails;
import com.connectin.business.employmenthistory.employment.entity.EmploymentHistory;
import com.connectin.business.images.entity.Image;
import com.connectin.business.user.entity.User;


@Entity
@Table(name="user_prof_details")
public class UserProfile implements Serializable{
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="user_id", columnDefinition="int(11)")
	private User user;

	@Column(name="current_company")
	private String currentCompany;

	@Column(name="total_exp")
	private int totalExp;

	@OneToOne
	@JoinColumn(name = "prof_img")
	private Image image;
	
	@Column(name="addr")
	private String address;
	
	@OneToMany(mappedBy="profile", cascade= CascadeType.ALL)
	private List<EducationDetails> educationDetails;
	
	@OneToMany(mappedBy="profiles", cascade= CascadeType.ALL)
	private List<EmploymentHistory> employments;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUserid() {
		return user;
	}

	public void setUserid(User userid) {
		this.user = userid;
	}

	public String getCurrentCompany() {
		return currentCompany;
	}

	public void setCurrentCompany(String currentCompany) {
		this.currentCompany = currentCompany;
	}

	public int getTotalExp() {
		return totalExp;
	}

	public void setTotalExp(int totalExp) {
		this.totalExp = totalExp;
	}

	public Image getImage() {
		return image;
	}

	public void setImage(Image image) {
		this.image = image;
	}

	public String getAddr() {
		return address;
	}

	public void setAddr(String addr) {
		this.address = addr;
	}

	
	public List<EmploymentHistory> getEmployments() {
		return employments;
	}

	public void setEmployments(List<EmploymentHistory> employments) {
		this.employments = employments;
	}

	public List<EducationDetails> getEducationDetails() {
		return educationDetails;
	}

	public void setEducationDetails(List<EducationDetails> educationDetails) {
		this.educationDetails = educationDetails;
	}
	
}
