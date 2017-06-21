package com.connectin.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Configuration
@Component
public class AppConfig {
	
	@Value("${Application.Api.BaseUrl}")
	public  String API_BASE_URL;
	
	@Value("${Application.Entity.DateFormat}")
	public String dateFormat;

	public String getAPI_BASE_URL() {
		return API_BASE_URL;
	}

	public void setAPI_BASE_URL(String aPI_BASE_URL) {
		API_BASE_URL = aPI_BASE_URL;
	}

	public String getDateFormat() {
		return dateFormat;
	}

	public void setDateFormat(String dateFormat) {
		this.dateFormat = dateFormat;
	}
}
