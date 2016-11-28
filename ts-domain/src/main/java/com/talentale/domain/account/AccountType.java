package com.talentale.domain.account;

public enum AccountType {
	USER("User"),
	GROUP("Group"),
	COMPANY("Company"),
	COMMUNITY("Community");
	
	private String value;
	AccountType(String value) {
		this.value = value;
	}
	
}
