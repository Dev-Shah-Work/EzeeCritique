package com.example.EzeeCritique.repo;

import com.example.EzeeCritique.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepo extends JpaRepository<Review,Integer> {

    @Query("SELECT r FROM Review r where r.bname=:bname")
    Review findByBname(@Param("bname") String bname);

    @Query("SELECT r FROM Review r WHERE r.uid=:uid")
    List<Review> findByUid(@Param("uid")Integer uid);

    @Query("SELECT r FROM Review r WHERE r.id=:id")
    Review findReviewById(@Param("id")Integer id);
}
