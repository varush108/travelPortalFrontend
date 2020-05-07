package com.nagarro.utils;

import java.io.IOException;
import java.util.Map;

import javax.persistence.AttributeConverter;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.ObjectMapper;

public class HashMapConverter implements AttributeConverter<Map<String, Object>, String> {
	
	@Autowired
	private ObjectMapper objectMapper = new ObjectMapper();
	
    @Override
    public String convertToDatabaseColumn(Map<String, Object> address) {
    	
        String addressJson = null;
        try {
            addressJson = objectMapper.writeValueAsString(address);
        } catch (final JsonProcessingException e) {
          System.out.println("error writing json"+e);
        }
 
        return addressJson;
    }
 
    @Override
    public Map<String, Object> convertToEntityAttribute(String addressJSON) {
 
        Map<String, Object> address = null;
        try {
            address = objectMapper.readValue(addressJSON, Map.class);
        } catch (final IOException e) {
            System.out.println("JSON reading error"+ e);
        }
 
        return address;
    }
 
}