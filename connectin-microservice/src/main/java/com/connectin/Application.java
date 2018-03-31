package com.connectin;

import com.connectin.authenticate.security.tokenmanager.service.TokenAuthenticationService;
import com.connectin.authenticate.security.tokenmanager.util.JwtUtil;
import com.connectin.authenticate.security.userdetails.UserDetailServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.core.userdetails.UserDetailsService;

@SpringBootApplication
//@EnableWebSecurity
@EnableAspectJAutoProxy(proxyTargetClass = true)
@EnableJpaRepositories(basePackages = {"com.connectin"}, entityManagerFactoryRef = "entityManagerFactory")
@ComponentScan(basePackages = {"com.connectin"})
//@PropertySource("classpath:urlconfig.properties")
@ImportResource({"classpath:/spring/root-context.xml", "classpath:/spring/servlet-context.xml",})
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean(name = "userDetailsService")
    public UserDetailsService loginService() {
        return new UserDetailServiceImpl();
    }

    @Bean(name = "tokenService")
    public TokenAuthenticationService tokenService() {
        return new TokenAuthenticationService();
    }

    @Bean(name = "jwtUtil")
    public JwtUtil jwtUtil() {
        return new JwtUtil();
    }

}
