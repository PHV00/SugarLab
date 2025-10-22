package com.backend.sugarlab.DTO;

import com.backend.sugarlab.entity.Assinatura;

public record PagamentoDTO(String nome, String chave, Assinatura assinatura) {}
