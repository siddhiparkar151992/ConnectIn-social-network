package com.connectin.web;


import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.connectin.authenticate.security.handlers.AuthenticationSuccessHandler;
import com.connectin.authenticate.security.provider.AuthProvider;
import com.connectin.authenticate.security.tokenmanager.service.TokenAuthenticationService;
import com.connectin.authenticate.security.tokenmanager.util.JwtUtil;
import com.connectin.authenticate.security.userdetails.UserDetailServiceImpl;

@Configuration
@EnableWebSecurity
@EnableAspectJAutoProxy(proxyTargetClass=true)
@ComponentScan("com.connectin")
public class ApplicationSecurity extends WebSecurityConfigurerAdapter {

	
	@Bean(name="userDetailsService")
	public UserDetailsService loginService(){
		return new UserDetailServiceImpl();
	}
	
	@Bean(name="authProvider")
	public AuthenticationProvider authProvider(){
		return new AuthProvider();
	} 
	
	@Bean(name="authenticationSuccessHandler")
	public SimpleUrlAuthenticationSuccessHandler authenticationSuccessHandler(){
		return new AuthenticationSuccessHandler();
	} 
	
	@Autowired
	private SimpleUrlAuthenticationSuccessHandler authenticationSuccessHandler;
	
	@Autowired
	private AuthProvider authProvider;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// TODO Auto-generated method stub
		auth.authenticationProvider(authProvider);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.
			authorizeRequests()
				.antMatchers("/").permitAll()
				.antMatchers("/login").permitAll()
				.antMatchers("/registration").permitAll()
				.antMatchers("/admin/**").hasAuthority("ADMIN")
				.antMatchers("/connectin/home/**").hasAuthority("ROLE_USER").anyRequest()
				.authenticated().and().csrf().disable().formLogin()
				.loginPage("/login").failureUrl("/login?error=true")
				.successHandler(authenticationSuccessHandler)
				.usernameParameter("username")
				.passwordParameter("password")
				.and().logout()
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
				.logoutSuccessUrl("/").and().exceptionHandling()
				.accessDeniedPage("/403");
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
	    web
	       .ignoring()
	       .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**");
	}

}
