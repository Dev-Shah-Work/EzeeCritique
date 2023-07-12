package com.example.EzeeCritique.service;

import com.example.EzeeCritique.wrapper.ReviewWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface ReviewService {
    ResponseEntity<String> addReview(Map<String, String> requestMap);

    ResponseEntity<List<ReviewWrapper>> getReviewByUid(Map<String, Integer> requestMap);

    ResponseEntity<List<ReviewWrapper>>  getReviewByBname(Map<String, Integer> requestMap);

    ResponseEntity<String> updateReviews(Map<String, String> requestMap);

    ResponseEntity<String> deleteReview(Integer id);
}
