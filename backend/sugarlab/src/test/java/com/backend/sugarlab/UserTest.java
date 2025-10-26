package com.backend.sugarlab;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.backend.sugarlab.DTO.UserRegisterDto;
import com.backend.sugarlab.entity.Usuario;
import com.backend.sugarlab.repository.UserRespository;
import com.backend.sugarlab.service.UserService;

public class UserTest {
    
    @Mock
    UserRespository userRespository;
    
    @Mock
    PasswordEncoder passwordEncoder;

    @InjectMocks
    UserService userService;

    @BeforeEach
    void setup(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void shouldCreateUserSuccessfully(){
        
        //Arrange
        UserRegisterDto userRegisterDto = new UserRegisterDto();
        userRegisterDto.setNome("Gustavo");
        userRegisterDto.setSobrenome("Paluski");
        userRegisterDto.setEmail("gustavo.email@gmail.com");
        userRegisterDto.setSenha("teste123");
        userRegisterDto.setEhAdmin(true);

        Usuario usuario = new Usuario();
        usuario.setId(1);
        usuario.setNome("Gustavo");
        usuario.setSobrenome("Paluski");
        usuario.setEmail("gustavo.email@gmail.com");
        usuario.setSenha("encodedteste123");
        usuario.setTelefone(null);
        usuario.setEhAdmin(true);

        when(passwordEncoder.encode("teste123")).thenReturn("encodedteste123");
        when(userRespository.save(any(Usuario.class))).thenReturn(usuario);

        //Act
        Usuario result = userService.createUser(userRegisterDto);

        //Assert
        assertNotNull(result);
        assertEquals("Gustavo", result.getNome());
        assertEquals("encodedteste123", result.getSenha());
        verify(userRespository, times(1)).save(any(Usuario.class));
    }

    @Test
    void shouldReturnUsersSuccessfully(){
        Usuario user1 = new Usuario();
        user1.setId(1);
        user1.setNome("Gustavo");
        user1.setSobrenome("Paluski");
        user1.setEmail("gustavo.email@gmail.com");
        user1.setSenha("senha123");
        user1.setTelefone(null);
        user1.setEhAdmin(true);

        Usuario user2 = new Usuario();
        user2.setId(2);
        user2.setNome("Fulana");
        user2.setSobrenome("Souza");
        user2.setEmail("fulana.souza@gmail.com");
        user2.setSenha("senhaaaa");
        user2.setTelefone(null);
        user2.setEhAdmin(true);

        List<Usuario> users = List.of(user1, user2);

        when(userRespository.findAll()).thenReturn(users);

        List<Usuario> result = userService.getUsers();

        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals("Gustavo", result.get(0).getNome());
        assertEquals("Fulana", result.get(1).getNome());
    }
}
