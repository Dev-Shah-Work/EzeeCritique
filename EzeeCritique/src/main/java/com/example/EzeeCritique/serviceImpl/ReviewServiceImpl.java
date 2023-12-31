package com.example.EzeeCritique.serviceImpl;

import com.example.EzeeCritique.error.CritiqueUtils;
import com.example.EzeeCritique.repo.ReviewRepo;
import com.example.EzeeCritique.service.ReviewService;
import com.example.EzeeCritique.wrapper.ReviewWrapper;
import com.example.EzeeCritique.model.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.EzeeCritique.jwt.JwtFilter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    ReviewRepo reviewRepo;
    @Autowired
    JwtFilter jwtFilter;
    @Override
    public ResponseEntity<String> addReview(Map<String, String> requestMap) {
        try{
            if(jwtFilter.isUser()){
                if(this.validateReviewMap(requestMap,false)){
                    reviewRepo.save(this.getReviewFromMap(requestMap,false));
                    return CritiqueUtils.getResponseEntity("Review was added successfully",HttpStatus.OK);
                }
                return CritiqueUtils.getResponseEntity("Invalid data format",HttpStatus.BAD_REQUEST);
            }
            return CritiqueUtils.getResponseEntity("Unauthorized Access",HttpStatus.UNAUTHORIZED);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return CritiqueUtils.getResponseEntity("Something went wrong in review Implementation", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Review>> getReviewByUid(Map<String, String> requestMap) {
        try{
            if(jwtFilter.isUser()){
                Integer uid=Integer.parseInt(requestMap.get("uid"));
                List<Review> userReviews=reviewRepo.findByUid(uid);
                return new ResponseEntity<>(userReviews,HttpStatus.OK);
            }
            return new ResponseEntity<>(new ArrayList<>(),HttpStatus.UNAUTHORIZED);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @Override
    public ResponseEntity<List<Review>> getReviewByBname(Map<String, String> requestMap) {
        try{
            if(jwtFilter.isBrand()) {
                String bname = requestMap.get("bname");
                System.out.println(bname);
                List<Review> brandReviews = reviewRepo.findByBname(requestMap.get("bname"));
                return new ResponseEntity<>(brandReviews, HttpStatus.OK);
            }
            return new ResponseEntity<>(new ArrayList<>(),HttpStatus.UNAUTHORIZED);

        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);

    }

    @Override
    public ResponseEntity<String> updateReviews(Map<String, String> requestMap) {
        try{
            if(jwtFilter.isUser()){
                if(validateReviewMap(requestMap,true)){
                    Optional<Review> reviewById=reviewRepo.findById(Integer.parseInt(requestMap.get("id")));
                    if(reviewById.isPresent()){
                        Review reviewFromMap=getReviewFromMap(requestMap,true);
                        reviewRepo.save(reviewFromMap);
                        return CritiqueUtils.getResponseEntity("Your review was updated successfully",HttpStatus.OK);
                    }
                    return CritiqueUtils.getResponseEntity("Review with given id does not exist",HttpStatus.BAD_REQUEST);
                }
                return CritiqueUtils.getResponseEntity("Invalid data format",HttpStatus.BAD_REQUEST);
            }
            return CritiqueUtils.getResponseEntity("Unauthorized Access",HttpStatus.UNAUTHORIZED);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return CritiqueUtils.getResponseEntity("Something went wrong in review Implementation", HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @Override
    public ResponseEntity<String> deleteReview(Integer id) {
        try{
            if(jwtFilter.isUser()){
                Optional<Review> review=reviewRepo.findById(id);
                if(review.isPresent()){
                    reviewRepo.deleteById(id);
                    return CritiqueUtils.getResponseEntity("Review was deleted successfully",HttpStatus.OK);
                }else{
                    return CritiqueUtils.getResponseEntity("Review with id:"+id+"does not exist",HttpStatus.NOT_FOUND);
                }
            }else{
                return CritiqueUtils.getResponseEntity("You are not authorized for this action",HttpStatus.UNAUTHORIZED);
            }
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return CritiqueUtils.getResponseEntity("Something went wrong in review Implementation", HttpStatus.INTERNAL_SERVER_ERROR);

    }
    private Review getReviewFromMap(Map<String, String> requestMap, boolean isAdd) {
        Review review=new Review();

        review.setPname(requestMap.get("pname"));
        review.setBname(requestMap.get("bname"));
        review.setUid(Integer.parseInt(requestMap.get("uid")));
        review.setDescription(requestMap.get("description"));
        review.setRating(requestMap.get("rating"));
        review.setUname(requestMap.get("uname"));
        if(isAdd){
            review.setId(Integer.parseInt(requestMap.get("id")));
        }
        return review;

    }

    private boolean validateReviewMap(Map<String,String> requestMap,boolean validateId){
        if(requestMap.containsKey("pname")
                && requestMap.containsKey("uname")
            && requestMap.containsKey("bname")
            && requestMap.containsKey("description")
            && requestMap.containsKey("uid")
                && requestMap.containsKey("rating")){
            if(validateId){
                if(requestMap.containsKey("id")) return true;
                return false;
            }
            return !validateId;
        }

        return false;
    }
}
