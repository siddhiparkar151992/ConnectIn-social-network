package com.talentale.domain.common;

public enum AccountAvailibility {
	ACTIVE("Active",1),
	INACTIVE("Inactive",0),
	EXPIRED("Expired",-1),
	CLOSED("Closed",-2);
	
	private String value;
	private int code;
	AccountAvailibility(String value, int code){
		this.value = value;
		this.code = code;
	}
}
