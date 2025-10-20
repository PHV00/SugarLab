package com.backend.sugarlab.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.sugarlab.entity.Receita;

public interface ReceitaRepository extends JpaRepository<Receita, Integer>{
    Optional<Receita> findByTitulo(String titulo);
}
