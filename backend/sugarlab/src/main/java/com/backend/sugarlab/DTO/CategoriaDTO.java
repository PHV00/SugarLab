package com.backend.sugarlab.DTO;

import java.util.Set;

public record CategoriaDTO(String nome, Set<Integer> alimentosIds) {}
