package com.example.EzeeCritique.controller;


import com.example.EzeeCritique.model.User;
import com.example.EzeeCritique.wrapper.ReviewWrapper;
import com.example.EzeeCritique.wrapper.UserWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RequestMapping("/api/ezeecritique/user")
public interface UserControl {
    @PostMapping("/auth/register")
    public ResponseEntity<String> signup(@RequestBody Map<String,String> requestMap);
    @PostMapping("/auth/login")
    public ResponseEntity<String> login (@RequestBody Map<String,String> requestMap);

    @GetMapping("/getBrands")
    public ResponseEntity<List<User>> getBrands();

    @GetMapping("/userDetails")
    public ResponseEntity<User> getUserDetails();





}
