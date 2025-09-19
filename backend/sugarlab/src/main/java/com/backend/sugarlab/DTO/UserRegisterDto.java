package com.backend.sugarlab.DTO;

import lombok.Data;

@Data
public class UserRegisterDto {
    
    private String nome;
    private String sobrenome;
    private String email;
    private String senha;
    private Boolean ehAdmin;

    public UserRegisterDto(){}
    public UserRegisterDto(String nome, String sobrenome, String email, String senha, Boolean ehAdmin){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha;
        this.ehAdmin = ehAdmin;
    }
}