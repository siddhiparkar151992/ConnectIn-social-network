package com.talentale.domain.profile;

import java.io.Serializable;

import com.talentale.domain.common.Image;
import com.talentale.domain.employmenthistory.EmploymentHistory;
import com.talentale.domain.user.User;


public class Profile implements Serializable{
	private User user;
	private EmploymentHistory empHistory;
	private Image profileImage;
	private Image coverImage;
	/**
	 * @param user
	 * @param empHistory
	 * @param profileImage
	 * @param coverImage
	 */
	public Profile(User user, EmploymentHistory empHistory, Image profileImage, Image coverImage) {
		super();
		this.user = user;
		this.empHistory = empHistory;
		this.profileImage = profileImage;
		this.coverImage = coverImage;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#clone()
	 */
	@Override
	protected Object clone() throws CloneNotSupportedException {
		// TODO Auto-generated method stub
		return super.clone();
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object arg0) {
		// TODO Auto-generated method stub
		return super.equals(arg0);
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#finalize()
	 */
	@Override
	protected void finalize() throws Throwable {
		// TODO Auto-generated method stub
		super.finalize();
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return super.hashCode();
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}
	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}
	/**
	 * @return the empHistory
	 */
	public EmploymentHistory getEmpHistory() {
		return empHistory;
	}
	/**
	 * @param empHistory the empHistory to set
	 */
	public void setEmpHistory(EmploymentHistory empHistory) {
		this.empHistory = empHistory;
	}
	/**
	 * @return the profileImage
	 */
	public Image getProfileImage() {
		return profileImage;
	}
	/**
	 * @param profileImage the profileImage to set
	 */
	public void setProfileImage(Image profileImage) {
		this.profileImage = profileImage;
	}
	/**
	 * @return the coverImage
	 */
	public Image getCoverImage() {
		return coverImage;
	}
	/**
	 * @param coverImage the coverImage to set
	 */
	public void setCoverImage(Image coverImage) {
		this.coverImage = coverImage;
	}
	
	
}
