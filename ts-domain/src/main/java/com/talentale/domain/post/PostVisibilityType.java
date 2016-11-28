package com.talentale.domain.post;

import java.io.Serializable;

public enum PostVisibilityType implements Serializable{
	PUBLIC("public"),
	CONNECTION("Connections"),
	PRIVATE("Private");
	
	private String value;
	PostVisibilityType(String value){
		this.value = value;
	}
}
