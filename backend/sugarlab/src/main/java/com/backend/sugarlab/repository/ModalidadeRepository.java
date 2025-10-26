package com.backend.sugarlab.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.sugarlab.entity.Modalidade;

public interface ModalidadeRepository extends JpaRepository<Modalidade, Integer> {
    
}
