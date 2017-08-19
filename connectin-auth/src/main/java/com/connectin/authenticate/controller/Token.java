package com.connectin.authenticate.controller;

public class Token {
	private String token;
	private int expiryDate;
	/**
	 * @param token
	 * @param expiryDate
	 */
	
	public Token(){
		
	}
	public Token(String token, int expiryDate) {
		super();
		this.token = token;
		this.expiryDate = expiryDate;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public int getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(int expiryDate) {
		this.expiryDate = expiryDate;
	};
	
	
}
