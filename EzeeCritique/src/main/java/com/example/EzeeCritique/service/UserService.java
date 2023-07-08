package com.example.EzeeCritique.service;

import com.example.EzeeCritique.wrapper.UserWrapper;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface UserService {
    public ResponseEntity<String>signup(Map<String,String> requestMap);

    ResponseEntity<String> login(Map<String, String> requestMap);

    ResponseEntity<List<UserWrapper>> getAllUser();
}
