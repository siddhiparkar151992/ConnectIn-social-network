package com.connectin.authenticate.entity.user;

public class UserCred {
	private String id;
	private String password;
	
	/**
	 * 
	 */
	public UserCred() {
		
	}
	/**
	 * @param id
	 * @param password
	 */
	public UserCred(String id, String password) {
		super();
		this.id = id;
		this.password = password;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "UserCred [id=" + id + ", password=" + password + "]";
	}
	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	
}
