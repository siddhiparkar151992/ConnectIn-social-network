package com.connectin.constants;

public enum ErrorCode {
	NOT_FOUND_ERROR("Not found"), NOT_FOUND_CODE(404), INVALID_CODE(402), INVALID_REQUEST(
			"Invalid request data found"), INCOMPLETE_MESSAGE("Request could not be completed");
	private String message;
	private int code;

	private ErrorCode(String message) {
		this.message = message;
	}

	private ErrorCode(int code) {
		this.code = code;
	}

}
