package com.example.EzeeCritique.serviceImpl;

import com.example.EzeeCritique.error.CritiqueUtils;
import com.example.EzeeCritique.jwt.CustomerUserDetailsService;
import com.example.EzeeCritique.jwt.JwtFilter;
import com.example.EzeeCritique.jwt.JwtUtil;
import com.example.EzeeCritique.model.User;
import com.example.EzeeCritique.repo.ReviewRepo;
import com.example.EzeeCritique.repo.UserRepo;
import com.example.EzeeCritique.service.UserService;
import com.example.EzeeCritique.wrapper.UserWrapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Slf4j//hota hai
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    //Business logic for signup
    /*
    ->Validating request
    ->Get tuple for that email from database via Repo
    ->If it is null than save new user im database
    ->If tuple already exist than return message already exist
    //Business logic for login
    ->Create a new UserNamePasswordAuthentication token with "new" as keyword and email and password of request as parameter
    ->Authenticate that token using AuthenticationManger and value which is returned is of type "Authentication"
    ->check for .isAuthenticated() method on above Authentication object.
    ->after above step,if status is true than generate token(token is generated using details from database and not from request) and return it, if not than return message "Need Approval"
    *
    * */
    @Autowired
    UserRepo userRepo;
    @Autowired
    ReviewRepo reviewRepo;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    CustomerUserDetailsService customerUserDetailsService;
    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    JwtFilter jwtFilter;
    @Override
    public ResponseEntity<String> signup(Map<String, String> requestMap) {
        try{
            if(this.validateSignupMap(requestMap)){
                User user= userRepo.findByUsername(requestMap.get("username"));
                if(Objects.isNull(user)){
                    userRepo.save(this.getUserFromMap(requestMap));
                    return CritiqueUtils.getResponseEntity("Successfully Registered", HttpStatus.OK);
                }else{
                    return CritiqueUtils.getResponseEntity("Email exists",HttpStatus.BAD_REQUEST);
                }
            }else {
                return  CritiqueUtils.getResponseEntity("Invalid Data",HttpStatus.BAD_REQUEST);
            }
        }catch (Exception exception) {
            exception.printStackTrace();
        }
        return  CritiqueUtils.getResponseEntity("Something Went Wrong in service implementation", HttpStatus.INTERNAL_SERVER_ERROR);
    }



    private boolean validateSignupMap(Map<String, String> requestMap) {
        if(requestMap.containsKey("username")
                && requestMap.containsKey("name")
                && requestMap.containsKey("password")
                && requestMap.containsKey("role")){
            return true;
        }
        return  false;
    }
    private User getUserFromMap(Map<String, String> requestMap) {
        User user= new User();
        user.setName(requestMap.get("name"));
        user.setUsername(requestMap.get("username"));
//        user.setPassword(requestMap.get("password"));
        user.setPassword(passwordEncoder.encode(requestMap.get("password")));
        user.setRole(requestMap.get("role"));
        return user;

    }
    @Override
    public ResponseEntity<String> login (Map<String,String>requestMap){
        log.info("Inside login");
        try{
            Authentication authentication= authenticationManager.authenticate(new UsernamePasswordAuthenticationToken
                    (requestMap.get("username"),requestMap.get("password")));
            if(authentication.isAuthenticated()){
//                if(customerUserDetailsService.getUserDetail().getStatus().equalsIgnoreCase("true")){
//                    return  new ResponseEntity<String>("{\"token\":\""+
//                            jwtUtil.generateToken(customerUserDetailsService.getUserDetail().getEmail(),
//                                    customerUserDetailsService.getUserDetail().getRole())+"\"}",HttpStatus.OK);
                    return  new ResponseEntity<String>("{\"token\":\""+
                            jwtUtil.generateToken(customerUserDetailsService.getUserDetail().getUsername(),
                                    customerUserDetailsService.getUserDetail().getRole())+"\",\"role\":\""+customerUserDetailsService.getUserDetail().getRole()+"\"}",HttpStatus.OK);

//                }
//                else{
//                    return new ResponseEntity<String>("{\"message\":\""+"Wait for admin approval"+"\"}",HttpStatus.BAD_REQUEST );
//                }
            }
        }catch (Exception exception){
            log.error("{}",exception);
        }
        return new ResponseEntity<String>("{\"message\":\""+"Bad credentials"+"\"}",HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<List<User>> getBrands() {
        try{
            List<User> brands = userRepo.getByRole();
            return new ResponseEntity<>(brands, HttpStatus.OK);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<User> getUserDetails() {
        try{
            return new ResponseEntity<>(userRepo.findByUsername(jwtFilter.getCurrentUser()),HttpStatus.OK);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new User(),HttpStatus.INTERNAL_SERVER_ERROR);
    }
    }

//    @Override
//    public ResponseEntity<List<UserWrapper>> getAllUser() {
//        try{
//            if(jwtFilter.isBrand()){
//                return new ResponseEntity<>(userRepo.getAllUser(),HttpStatus.OK);
//            }else
//                return new ResponseEntity<>(userRepo.getByUsername(jwtFilter.getCurrentUser()),HttpStatus.OK);
//        }catch(Exception ex){
//            ex.printStackTrace();
//        }
//        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
//    }

