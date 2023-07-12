package com.example.EzeeCritique.controller;

import com.example.EzeeCritique.wrapper.ReviewWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RequestMapping("/api/ezeecritique/review")
public interface ReviewControl {
    @PostMapping("/addReview")
    public ResponseEntity<String> addReview(@RequestBody Map<String,String> requestMap);

    @GetMapping("/getReviewByUid")
    public ResponseEntity<List<ReviewWrapper>> getReviewByUid(@RequestBody Map<String,Integer> requestMap);

    @GetMapping("/getReviewByBname")
    public ResponseEntity<List<ReviewWrapper>> getReviewByBname(@RequestBody Map<String,Integer> requestMap);


    @PostMapping("/updateReview")
    public ResponseEntity<String> updateReviews(@RequestBody Map<String,String> requestMap);

    @DeleteMapping("/deleteReview/{id}")
    public ResponseEntity<String> deleteReview(@PathVariable Integer id);

}
