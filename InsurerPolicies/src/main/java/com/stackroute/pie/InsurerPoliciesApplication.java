package com.stackroute.pie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient

@SpringBootApplication
public class InsurerPoliciesApplication {

	public static void main(String[] args) {
		SpringApplication.run(XMLtoJSON.class, args);
	}

}

	