package com.example.EzeeCritique.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="review")
//@NamedQuery(name="Review.findByUid",query="SELECT new com.example.EzeeCritique.wrapper.ReviewWrapper(r.pname,r.bname,r.uid,r.description,r.rating) FROM Review r WHERE r.uid=:uid")
//@NamedQuery(name="Review.findByBname",query="SELECT new com.example.EzeeCritique.wrapper.ReviewWrapper(r.pname,r.bname,r.uid,r.description,r.rating) FROM Review r where r.bname=:bname")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    private String bname;
    private String pname;
    private Integer uid;
    @Lob
    private String description;
    private String rating;


}
