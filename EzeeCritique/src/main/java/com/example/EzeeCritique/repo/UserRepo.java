package com.example.EzeeCritique.repo;

import com.example.EzeeCritique.model.User;
import com.example.EzeeCritique.wrapper.UserWrapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Integer> {


    @Query("SELECT u FROM User u WHERE u.username=:username")
    User findByUsername(@Param("username") String username);

    @Query("SELECT u FROM User u WHERE u.role='brand'")
    List<User> getByRole();

    @Query("SELECT u FROM User u WHERE u.id=:id")
    User getById(@Param("id")Integer id);
    @Query("SELECT u FROM User u WHERE u.role='brand' OR u.role='user' " )
    List<User> getUsers();





//    List<UserWrapper>getAllUser();

//    @Override
//    Optional<User> findById(Integer integer);

//    List<UserWrapper>getByUsername(@Param("username") String currentUser);
}

