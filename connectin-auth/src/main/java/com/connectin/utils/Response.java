package com.connectin.utils;

import java.util.HashMap;
import java.util.Map;


public class Response<T>{
	/**
	 * 
	 */
	public Response() {
		super();
	}
	public final static int RESPONSE_STATUS_SUCCESS=0;
	public final static int RESPONSE_STATUS_FAIURE=-1;
	public final static int RESPONSE_STATUS_VALIDATION_FAILED=-2;
	public final static int RESPONSE_OPERATION_COMPLETED=9999;
	public final static int CODE_ALREADY_EXIST=9998;
	
	private int statusCode;
	private T response;
	private String statusMessage =null;
	private int errorCode;
	private String errorMessage=null;
	/**
	 * @param statusCode
	 * @param data
	 * @param statusMessage
	 * @param errorCode
	 * @param errorMessage
	 */
	public Response(int statusCode, T data, String statusMessage, int errorCode,
			String errorMessage) {
		super();
		this.statusCode = statusCode;
		this.response = data;
		this.statusMessage = statusMessage;
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
	}
	/**
	 * @return the statusCode
	 */
	public int getStatusCode() {
		return statusCode;
	}
	/**
	 * @param statusCode
	 * @param userData
	 * @param statusMessage
	 */
	public Response(int statusCode, T userData, String statusMessage) {
		super();
		this.statusCode = statusCode;
		this.response = userData;
		this.statusMessage = statusMessage;
	}
	/**
	 * @param statusCode the statusCode to set
	 */
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	/**
	 * @return the data
	 */
	public Object getData() {
		return response;
	}
	/**
	 * @param data the data to set
	 */
	public void setData(T data) {
		this.response = data;
	}
	/**
	 * @return the statusMessage
	 */
	public String getStatusMessage() {
		return statusMessage;
	}
	/**
	 * @param statusMessage the statusMessage to set
	 */
	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
	}
	/**
	 * @return the errorCode
	 */
	public int getErrorCode() {
		return errorCode;
	}
	/**
	 * @param errorCode the errorCode to set
	 */
	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}
	/**
	 * @return the errorMessage
	 */
	public String getErrorMessage() {
		return errorMessage;
	}
	/**
	 * @param errorMessage the errorMessage to set
	 */
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	/**
	 * @return the responseStatusSuccess
	 */
	public static int getResponseStatusSuccess() {
		return RESPONSE_STATUS_SUCCESS;
	}
	/**
	 * @return the responseStatusFaiure
	 */
	public static int getResponseStatusFaiure() {
		return RESPONSE_STATUS_FAIURE;
	}
	/**
	 * @return the responseStatusValidationFailed
	 */
	public static int getResponseStatusValidationFailed() {
		return RESPONSE_STATUS_VALIDATION_FAILED;
	}
	/**
	 * @return the responseOperationCompleted
	 */
	public static int getResponseOperationCompleted() {
		return RESPONSE_OPERATION_COMPLETED;
	}
	/**
	 * @return the codeAlreadyExist
	 */
	public static int getCodeAlreadyExist() {
		return CODE_ALREADY_EXIST;
	}
	
	
	
	
	
}
