package com.backend.sugarlab.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.sugarlab.entity.Receita;

@Repository
public interface ReceitaRepository extends JpaRepository<Receita, Integer>{
    Optional<Receita> findByTitulo(String titulo);
}
