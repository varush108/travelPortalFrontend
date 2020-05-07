package com.nagarro.utils;

import org.springframework.http.HttpHeaders;

public class ConfigParams {
	
	public static HttpHeaders getHeaders() {
		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin","*");
        response.set("Access-Control-Allow-Credentials", "*");
        response.set("Access-Control-Allow-Methods", "*");
        response.set("Access-Control-Allow-Headers", "*");
        return response;
	}

}
