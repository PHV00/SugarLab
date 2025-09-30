package com.backend.sugarlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.UserRegisterDto;
import com.backend.sugarlab.Mapper.UserMapper;
import com.backend.sugarlab.entity.Usuario;
import com.backend.sugarlab.repository.UserRespository;

import jakarta.persistence.EntityExistsException;

@Service
public class UserService {

    @Autowired
    UserRespository userRespository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public UserService(UserRespository userRespository, PasswordEncoder passwordEncoder){
        this.userRespository = userRespository;
        this.passwordEncoder = passwordEncoder;
    }

    public Usuario createUser(UserRegisterDto userDto){
        if(userDto.getNome() == "" || userDto.getEmail() == "" || userDto.getSenha() == ""){
            throw new EntityExistsException("User with no datas!"); 
        }

        String userRawPassord = userDto.getSenha();
        String encodedPassword = passwordEncoder.encode(userRawPassord);

        userDto.setSenha(encodedPassword);

        return userRespository.save(UserMapper.toUsurio(userDto));
    }

    public List<Usuario> getUsers(){
        return userRespository.findAll();
    }

}
