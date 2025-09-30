package com.backend.sugarlab.service;

import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.LoginRequestDTO;
import com.backend.sugarlab.entity.Usuario;
import com.backend.sugarlab.repository.UserRespository;

@Service
public class LoginService {
    
    private final UserRespository userRespository;

    public LoginService(UserRespository userRespository){
        this.userRespository = userRespository;
    }

    public String login(LoginRequestDTO loginRequest) {
        Usuario usuario = userRespository.findByEmail(loginRequest.getEmail());

        if (usuario == null) {
            return "Usuário não encontrado";
        }
        
        if (!usuario.getSenha().equals(loginRequest.getSenha())) {
            return "Senha Incorreta";
        }

        return "Login Realizado com Sucesso!";
    }
}
