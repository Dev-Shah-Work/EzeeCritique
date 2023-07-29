package com.example.EzeeCritique.controllerImpl;

import com.example.EzeeCritique.controller.UserControl;
import com.example.EzeeCritique.error.CritiqueUtils;
import com.example.EzeeCritique.model.User;
import com.example.EzeeCritique.service.UserService;
import com.example.EzeeCritique.wrapper.UserWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
@RestController
@RequiredArgsConstructor
@CrossOrigin
public class UserControllerImpl implements UserControl {
    private final UserService userService;
    @Override
    public ResponseEntity<String> signup(Map<String, String> requestMap) {
        try{
            return userService.signup(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return CritiqueUtils.getResponseEntity("Something went wrong in controller implementation", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> login(Map<String, String> requestMap) {
        try{
            return userService.login(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return CritiqueUtils.getResponseEntity("Something went wrong in controller implementation", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<User>> getBrands() {
        try{
            return userService.getBrands();
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<User> getUserDetails() {
        try{
            return userService.getUserDetails();

        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new User(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<User> getUserId(Map<String, String> requestMap) {
        try{
            return userService.getUserById(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new User(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<User>> getAllUsers() {
        try
        {
            return userService.getAllUsers();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> deleteUser(Map<String, String> requestmap) {
        try{
           return userService.deleteUser(requestmap);

        }catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong in controller imlementation",HttpStatus.INTERNAL_SERVER_ERROR);
    }


}
