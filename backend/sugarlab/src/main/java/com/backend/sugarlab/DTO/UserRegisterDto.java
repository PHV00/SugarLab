package com.backend.sugarlab.DTO;

public class UserRegisterDto {
    
    private int id;

    private String nome;
    private String email;
    private String senha;
    private Boolean ehAdmin;
    private int ativo;

    public UserRegisterDto(){}
    public UserRegisterDto(int id, String nome, String email, String senha, Boolean ehAdmin, int ativo){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.ehAdmin = ehAdmin;
        this.ativo = ativo;
    }

    public int getId(){
        return id;
    }

    public String getNome(){
        return nome;
    }

    public String getEmail(){
        return email;
    }

    public String getSenha(){
        return senha;
    }

    public Boolean getEhAdmin(){
        return ehAdmin;
    }

    public int getAtivo(){
        return ativo;
    }

    public void setId(int id){
        this.id = id;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setSenha(String senha){
        this.senha = senha;
    }

    public void setEhAdmin(Boolean ehAdmin){
        this.ehAdmin = ehAdmin;
    }

    public void setAtivo(int ativo){
        this.ativo = ativo;
    }
}