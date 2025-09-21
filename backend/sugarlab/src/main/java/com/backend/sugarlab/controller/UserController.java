package com.backend.sugarlab.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.sugarlab.entity.Usuario;
import com.backend.sugarlab.DTO.UserRegisterDto;
import com.backend.sugarlab.mapper.UserMapper;
import com.backend.sugarlab.repository.UserRespository;
import com.backend.sugarlab.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRespository userRespository;

    @Autowired
    UserService userService;

    @PostMapping("/v1/newUser")
    public ResponseEntity<Usuario> createUser(@RequestBody UserRegisterDto usuarioDto){
        try{
            userService.createUser(usuarioDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(UserMapper.toUsurio(usuarioDto));
        }catch(Exception exception){
            System.out.println("Error: "+exception);
            return ResponseEntity.status(HttpStatus.CONFLICT).body(UserMapper.toUsurio(usuarioDto));
        }
    }

    @GetMapping("/v1/getUsers")
    public ResponseEntity<List<Usuario>> getAllUsers(){
        try{
            return ResponseEntity.ok(userService.getUsers());
        }catch(Exception exception){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Collections.emptyList());
        }
    }
}
