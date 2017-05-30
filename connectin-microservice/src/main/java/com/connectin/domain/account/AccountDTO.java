package com.connectin.domain.account;

import java.sql.Date;

import com.connectin.common.domain.AccountAvailibility;
import com.connectin.domain.user.UserDTO;

public class AccountDTO {
	private String username;
	private UserDTO user;
	private AccountType accountType;
	private AccountAvailibility active;
	private Date createdDate;
	/**
	 * @param username
	 * @param user
	 * @param accountType
	 * @param active
	 * @param createdDate
	 */
	public AccountDTO(String username, UserDTO user, AccountType accountType, AccountAvailibility active, Date createdDate) {
		super();
		this.username = username;
		this.user = user;
		this.accountType = accountType;
		this.active = active;
		this.createdDate = createdDate;
	}
	@Override
	public String toString() {
		return "AccountDTO [username=" + username + ", user=" + user + ", accountType=" + accountType + ", active="
				+ active + ", createdDate=" + createdDate + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((accountType == null) ? 0 : accountType.hashCode());
		result = prime * result + ((active == null) ? 0 : active.hashCode());
		result = prime * result + ((createdDate == null) ? 0 : createdDate.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AccountDTO other = (AccountDTO) obj;
		if (accountType != other.accountType)
			return false;
		if (active != other.active)
			return false;
		if (createdDate == null) {
			if (other.createdDate != null)
				return false;
		} else if (!createdDate.equals(other.createdDate))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}
	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}
	/**
	 * @return the user
	 */
	public UserDTO getUser() {
		return user;
	}
	/**
	 * @param user the user to set
	 */
	public void setUser(UserDTO user) {
		this.user = user;
	}
	/**
	 * @return the accountType
	 */
	public AccountType getAccountType() {
		return accountType;
	}
	/**
	 * @param accountType the accountType to set
	 */
	public void setAccountType(AccountType accountType) {
		this.accountType = accountType;
	}
	/**
	 * @return the active
	 */
	public AccountAvailibility getActive() {
		return active;
	}
	/**
	 * @param active the active to set
	 */
	public void setActive(AccountAvailibility active) {
		this.active = active;
	}
	/**
	 * @return the createdDate
	 */
	public Date getCreatedDate() {
		return createdDate;
	}
	/**
	 * @param createdDate the createdDate to set
	 */
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	
	
}
