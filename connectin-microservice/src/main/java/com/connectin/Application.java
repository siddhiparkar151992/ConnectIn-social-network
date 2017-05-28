package com.connectin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.connectin" })
@ImportResource({ "classpath:/spring/root-context.xml", "classpath:/spring/servlet-context.xml", })
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
