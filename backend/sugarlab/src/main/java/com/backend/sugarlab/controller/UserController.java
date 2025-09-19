package com.backend.sugarlab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.sugarlab.entity.Usuario;
import com.backend.sugarlab.mapper.UserMapper;
import com.backend.sugarlab.repository.UserRespository;
import com.backend.sugarlab.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRespository userRespository;

    UserService userService;

    @PostMapping("/v1/newUser")
    public ResponseEntity<Usuario> createUser(@RequestBody Usuario usuario){
        try{
            userService.createUser(UserMapper.toDTO(usuario));

            return ResponseEntity.status(HttpStatus.CREATED).body(usuario);
        }catch(Exception exception){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(usuario);
        }
    }
}
