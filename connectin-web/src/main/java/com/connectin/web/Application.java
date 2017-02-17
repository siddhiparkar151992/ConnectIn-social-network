package com.connectin.web;

import javax.servlet.Filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.connectin.authenticate.security.AuthenticationFilter;
import com.connectin.authenticate.security.tokenmanager.service.TokenAuthenticationService;
import com.connectin.authenticate.security.tokenmanager.util.JwtUtil;
import com.connectin.authenticate.security.userdetails.UserDetailServiceImpl;
import com.connectin.config.ApplicationConfig;


@SpringBootApplication
@EnableJpaRepositories
@EnableWebSecurity
@EnableAspectJAutoProxy(proxyTargetClass=true)
@ComponentScan(basePackages={"com.connectin"})
@ImportResource({
	"classpath:/spring/root-context.xml",
	"classpath:/spring/servlet-context.xml",
	/*"classpath:/spring/application-security.xml"*/
	})
public class Application {
	
	@Autowired
	private ApplicationConfig appCOnfig;
	
	@Bean(name="userDetailsService")
	public UserDetailsService loginService(){
		return new UserDetailServiceImpl();
	}
	
	@Bean(name="tokenService")
	public TokenAuthenticationService tokenService(){
		return new TokenAuthenticationService();
	}
	
	@Bean(name="jwtUtil")
	public JwtUtil jwtUtil(){
		return new JwtUtil();
	}
	
	
	
	@Bean
	public FilterRegistrationBean someFilterRegistration() {

	    FilterRegistrationBean registration = new FilterRegistrationBean();
	    registration.setFilter(someFilter());
	    registration.addUrlPatterns("/api/*");
	    /*registration.addInitParameter("paramName", "paramValue");*/
	    registration.setName("authFilter");
	    registration.setOrder(1);
	    return registration;
	} 

	@Bean(name = "authFilter")
	public Filter someFilter() {
	    return new AuthenticationFilter();
	}
	public static void main(String[] args) {
		SpringApplication.run(
				Application.class, args);
	}

}
