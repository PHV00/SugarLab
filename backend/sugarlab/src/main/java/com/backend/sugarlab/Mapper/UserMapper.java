package com.backend.sugarlab.Mapper;

import com.backend.sugarlab.DTO.UserRegisterDto;
import com.backend.sugarlab.entity.Usuario;

public class UserMapper {
    //Metodo para converter Usuario -> UserRegisterDto
    public static UserRegisterDto toDTO(Usuario user) {
        return new UserRegisterDto(
                user.getId(),
                user.getNome(),
                user.getEmail(),
                user.getSenha(),
                user.getEhAdmin(),
                user.getAtivo()
        );
    }

    // Metodo para converter UserRegisterDto -> Usuario
    public static Usuario toUsurio(UserRegisterDto userDto) {
        Usuario usuario = new Usuario();
        usuario.setId(userDto.getId());
        usuario.setNome(userDto.getNome());
        usuario.setEmail(userDto.getEmail());
        usuario.setSenha(userDto.getSenha());
        usuario.setEhAdmin(userDto.getEhAdmin());
        usuario.setAtivo(userDto.getAtivo());
        return usuario;
    }
}
