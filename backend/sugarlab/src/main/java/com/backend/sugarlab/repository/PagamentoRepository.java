package com.backend.sugarlab.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.sugarlab.entity.Pagamento;

public interface PagamentoRepository extends JpaRepository<Pagamento, Integer> {
    
}
