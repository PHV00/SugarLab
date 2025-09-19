package com.backend.sugarlab.service;

import org.springframework.beans.factory.annotation.Autowired;
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

    public UserService(UserRespository userRespository){
        this.userRespository = userRespository;
    }

    public Usuario createUser(UserRegisterDto userDto){
        if(userDto.getNome() == "" || userDto.getEmail() == "" || userDto.getSenha() == ""){
            throw new EntityExistsException("User with no datas!"); 
        }
        
        System.out.println("BANANA");
        return userRespository.save(UserMapper.toUsurio(userDto));
    }

}
