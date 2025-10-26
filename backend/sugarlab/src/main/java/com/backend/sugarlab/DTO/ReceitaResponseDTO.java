package com.backend.sugarlab.DTO;

import java.util.Set;

public record ReceitaResponseDTO(String titulo, Set<AlimentoResumoDTO> alimentosIds) {}
