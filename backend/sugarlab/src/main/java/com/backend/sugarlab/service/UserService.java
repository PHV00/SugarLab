package com.backend.sugarlab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.UserRegisterDto;
import com.backend.sugarlab.mapper.UserMapper;
import com.backend.sugarlab.entity.Usuario;
import com.backend.sugarlab.repository.UserRespository;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;

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
        else if(userRespository.findById(userDto.getId()).isEmpty()){
            throw new EntityNotFoundException("User not found!");
        }
        
        return userRespository.save(UserMapper.toUsurio(userDto));
    }

}
