package com.backend.sugarlab.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.sugarlab.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso, Integer> {
    
}
