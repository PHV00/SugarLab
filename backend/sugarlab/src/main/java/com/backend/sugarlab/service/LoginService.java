package com.backend.sugarlab.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.LoginRequestDTO;
import com.backend.sugarlab.entity.Usuario;
import com.backend.sugarlab.repository.UserRespository;

@Service
public class LoginService {
    
    private final UserRespository userRespository;
    private final PasswordEncoder passwordEncoder;

    public LoginService(UserRespository userRespository, PasswordEncoder passwordEncoder){
        this.userRespository = userRespository;
        this.passwordEncoder = passwordEncoder;
    }

    public String login(LoginRequestDTO loginRequest) {
        Usuario usuario = userRespository.findByEmail(loginRequest.getEmail());

        if (usuario == null) {
            return "Usuário não encontrado";
        }
        
        if (!passwordEncoder.matches(loginRequest.getSenha(), usuario.getSenha())) {
            return "Senha Incorreta";
        }

        return "Login Realizado com Sucesso!";
    }
}
