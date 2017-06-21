package com.connectin.business.user.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;

import org.hibernate.jpamodelgen.xml.jaxb.TemporalType;

import com.connectin.business.comments.entity.Comment;
import com.connectin.business.images.entity.Image;
import com.connectin.common.domain.AccountAvailibility;
import com.connectin.constants.Gender;
import com.connectin.domain.account.AccountType;


@Entity
@Table(name="user")
public class User implements Serializable{
	@Id
	@Column(name="id")
	private int id;
	
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Image profileImage;

	

	public Image getImages() {
		return profileImage;
	}

	public void setImages(Image images) {
		this.profileImage = images;
	}

	@Column(name="firstName")
	private String firstName;
	
	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", gender=" + gender + ", createdDate=" + createdDate + ", userName=" + userName + "]";
	}

	@Column(name="lastName")
	private String lastName;
	
	@Column(name="email")
	private String email;
	
	@Enumerated(EnumType.STRING)
	@Column(name="gender", columnDefinition="varchar(1)" )
	private Gender gender;
	

	@Column(name="birthDate")
	@Temporal(javax.persistence.TemporalType.DATE)
	private Date createdDate;
	
	@Column(name="user_name")
	private String userName;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	
}
