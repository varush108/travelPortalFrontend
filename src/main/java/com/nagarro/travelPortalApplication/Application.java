package com.nagarro.travelPortalApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication(scanBasePackages={
"com.nagarro.controllers","com.nagarro.entities"})
@EnableJpaRepositories("com.nagarro.repositories")
@ComponentScan(basePackages = { "com.nagarro.*" })
@ServletComponentScan("com.nagarro.*")
@EntityScan("com.nagarro.*")   
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
