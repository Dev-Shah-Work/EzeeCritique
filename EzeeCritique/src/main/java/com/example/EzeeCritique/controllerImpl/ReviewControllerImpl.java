package com.example.EzeeCritique.controllerImpl;

import com.example.EzeeCritique.controller.ReviewControl;
import com.example.EzeeCritique.error.CritiqueUtils;
import com.example.EzeeCritique.service.ReviewService;
import com.example.EzeeCritique.wrapper.ReviewWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class ReviewControllerImpl implements ReviewControl {
    @Autowired
    private final ReviewService reviewService;
    @Override
    public ResponseEntity<String> addReview(Map<String, String> requestMap) {
        try{
            reviewService.addReview(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return CritiqueUtils.getResponseEntity("Problem while adding review", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<ReviewWrapper>> getReviewByUid(Map<String, Integer> requestMap) {
        try{
            reviewService.getReviewByUid(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<ReviewWrapper>> getReviewByBname(Map<String, Integer> requestMap) {
        try{
            reviewService.getReviewByBname(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> updateReviews(Map<String, String> requestMap) {
        try{
            reviewService.updateReviews(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return CritiqueUtils.getResponseEntity("Problem while updating review",HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> deleteReview(Integer id) {
        try{
            reviewService.deleteReview(id);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return CritiqueUtils.getResponseEntity("Problem while deleting review",HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
