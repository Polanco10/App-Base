package com.example.demo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.filter.CorsFilter;

import ch.qos.logback.core.status.Status;

import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.CorsConfiguration;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200", methods= {RequestMethod.GET,RequestMethod.POST})

public class DemoApplication {
	@Bean
	public CorsFilter corsFilter() {
	UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	CorsConfiguration config = new CorsConfiguration();
	config.setAllowCredentials(true);
	config.addAllowedOriginPattern("*");
	config.addAllowedHeader("*");
	config.addAllowedMethod("OPTIONS");
	config.addAllowedMethod("GET");
	config.addAllowedMethod("POST");
	config.addAllowedMethod("PUT");
	config.addAllowedMethod("DELETE");
	source.registerCorsConfiguration("/**", config);
	return new CorsFilter(source);
}
	@GetMapping("/home")
	public Map<String,String> home(){
		Map<String,String> resp = new HashMap<String,String>();
		resp.put("message","hola");
		resp.put("status", "200");
		return resp;
	}
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
