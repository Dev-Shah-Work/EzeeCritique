package com.example.EzeeCritique.controller;

import com.example.EzeeCritique.model.Review;
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

    @PostMapping("/getReviewByUid")
    public ResponseEntity<List<Review>> getReviewByUid(@RequestBody Map<String,String> requestMap);

    @PostMapping("/getReviewByBname")
    public ResponseEntity<List<Review>> getReviewByBname(@RequestBody Map<String,String> requestMap);


    @PostMapping("/updateReview")
    public ResponseEntity<String> updateReviews(@RequestBody Map<String,String> requestMap);

    @DeleteMapping("/deleteReview/{id}")
    public ResponseEntity<String> deleteReview(@PathVariable Integer id);

}
