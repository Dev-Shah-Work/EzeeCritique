package com.example.EzeeCritique.repo;

import com.example.EzeeCritique.model.Review;
import com.example.EzeeCritique.wrapper.ReviewWrapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepo extends JpaRepository<Review,Integer> {

//    @Query(value = "SELECT * FROM review where bname = :bname",nativeQuery = true)
//    List<Review> getByBname(@Param("bname") String bname);

//    @Query(value = "SELECT new com.example.EzeeCritique.wrapper.ReviewWrapper(r.pname,r.bname,r.uid,r.description,r.rating) FROM Review r WHERE r.uid=:uid", nativeQuery = true)
//    List<ReviewWrapper> findByUid(@Param("uid")Integer uid);

    List<Review> findByUid(Integer id);

    List<Review> findByBname(String bname);
    @Query(value = "SELECT r FROM Review r WHERE r.id=:id",nativeQuery = true)
    Review findReviewById(@Param("id")Integer id);
}
