package com.backend.sugarlab.DTO;

import lombok.Data;

@Data
public class LoginResponseDTO {
    private String mensagem;
    private boolean sucesso;

    public LoginResponseDTO(String mensagem, boolean sucesso) {
        this.mensagem = mensagem;
        this.sucesso = sucesso;
    }
}