package com.backend.sugarlab.DTO;

import lombok.Data;

@Data
public class LoginResponseDTO {
    private String token;
    private String nome;
    private String email;
    private boolean ehAdmin;
}
