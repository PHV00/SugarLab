package com.backend.sugarlab.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.sugarlab.entity.Usuario;

public interface UserRespository extends JpaRepository<Usuario, Integer> {
    List<Usuario> findByEmail(String email);
    Usuario loginByEmail (String email);
    Optional<Usuario> findById(Integer id);
}
