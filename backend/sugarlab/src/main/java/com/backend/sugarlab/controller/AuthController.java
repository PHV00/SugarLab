package com.backend.sugarlab.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.backend.sugarlab.DTO.UserRegisterDto;
import com.backend.sugarlab.entity.Usuario;
import com.backend.sugarlab.repository.UserRespository;
import com.backend.sugarlab.security.JwtUtil;
import com.backend.sugarlab.service.UserService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRespository userRespository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Usuario register(@RequestBody UserRegisterDto userDto) {
        return userService.createUser(userDto);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String senha = loginData.get("senha");

        Usuario user = userRespository.findByEmail(email);

        if (user == null || !passwordEncoder.matches(senha, user.getSenha())) {
            throw new RuntimeException("Credenciais inválidas");
        }

        String token = jwtUtil.generateToken(user);

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("type", "Bearer");
        response.put("user", user.getNome());
        response.put("role", user.getEhAdmin());
        return response;
    }

}
