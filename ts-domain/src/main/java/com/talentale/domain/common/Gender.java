package com.talentale.domain.common;

import java.io.Serializable;

public enum Gender implements Serializable{
	MALE("Male"),
	FEMALE("Female");
	private String value;
	Gender(String value){
		this.value = value;
	}
}
