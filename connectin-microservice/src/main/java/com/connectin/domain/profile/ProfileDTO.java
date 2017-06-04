package com.connectin.domain.profile;

import java.io.Serializable;
import java.util.List;

import com.connectin.domain.education.EducationDTO;
import com.connectin.domain.employmenthistory.employment.EmploymentHistoryDTO;


public class ProfileDTO implements Serializable{
	private int id;
	private List<EmploymentHistoryDTO> empHistory;
	private List<EducationDTO> eudcationalHistory;
	private String profileImage;
	private String coverImage;
	private int totalExp;
	private String address;
	private String currentCompany;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public List<EmploymentHistoryDTO> getEmpHistory() {
		return empHistory;
	}
	public void setEmpHistory(List<EmploymentHistoryDTO> empHistory) {
		this.empHistory = empHistory;
	}
	public List<EducationDTO> getEudcationalHistory() {
		return eudcationalHistory;
	}
	public void setEudcationalHistory(List<EducationDTO> eudcationalHistory) {
		this.eudcationalHistory = eudcationalHistory;
	}
	public String getCurrentCompany() {
		return currentCompany;
	}
	public void setCurrentCompany(String currentCompany) {
		this.currentCompany = currentCompany;
	}
	public ProfileDTO(int id, String profileImage, String coverImage, int totalExp, String address,
			String currentCompany) {
		super();
		this.id = id;
		this.profileImage = profileImage;
		this.coverImage = coverImage;
		this.totalExp = totalExp;
		this.address = address;
		this.currentCompany = currentCompany;
	}
	public String getProfileImage() {
		return profileImage;
	}
	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}
	public String getCoverImage() {
		return coverImage;
	}
	public void setCoverImage(String coverImage) {
		this.coverImage = coverImage;
	}
	public int getTotalExp() {
		return totalExp;
	}
	public void setTotalExp(int totalExp) {
		this.totalExp = totalExp;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
}
