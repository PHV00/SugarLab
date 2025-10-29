package com.backend.sugarlab.DTO;

import java.util.Set;

public record AlimentoCadastroDto(String nome, String descricao, Set<Integer> categoriasIds) {}
