package com.backend.sugarlab.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.sugarlab.DTO.LoginRequestDTO;
import com.backend.sugarlab.service.LoginService;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping
    public ResponseEntity<String> login(@RequestBody LoginRequestDTO loginRequest) {
        String response = loginService.login(loginRequest);
        return ResponseEntity.ok(response);
    }
}