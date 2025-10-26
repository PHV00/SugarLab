package com.backend.sugarlab.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.sugarlab.entity.Alimento;

@Repository
public interface AlimentoRepository extends JpaRepository<Alimento, Integer>{
    Optional<Alimento> findByNome(String name);
    Optional<Alimento> findById(Integer id);
}
