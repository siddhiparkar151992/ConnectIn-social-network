package com.connectin.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
	
	@Value("${Application.Api.BaseUrl}")
	public static String API_BASE_URL;
}
