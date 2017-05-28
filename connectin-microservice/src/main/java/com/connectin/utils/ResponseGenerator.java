package com.connectin.utils;

import org.springframework.stereotype.Service;

@Service
public class ResponseGenerator<T> {
	public Response<T> generateSuccessResponse(String message, int statusCode,
			T data) {
		Response<T> response = new Response<T>();
		response.setStatusCode(statusCode);
		response.setStatusMessage(message);
		response.setData(data);
		return response;

	}
	
	public Response<T> generateErrorResponse(String errorMessage, int errorCode,
			T data) {
		Response<T> response = new Response<T>();
		response.setErrorCode(errorCode);
		response.setErrorMessage(errorMessage);
		response.setData(null);
		return response;

	}
}
