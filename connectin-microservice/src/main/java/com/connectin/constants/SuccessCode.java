package com.connectin.constants;

public enum SuccessCode {
	SUCCESS_MESSAGE("Success"), SUCCESS_CODE(200);
	private String message;
	private int code;

	private SuccessCode(String message) {
		this.message = message;
	}

	private SuccessCode(int code) {
		this.code = code;
	}

}
