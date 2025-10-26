package com.backend.sugarlab.DTO;

import java.util.Set;

public record CategoriaResponseDTO(Integer id, String nome, Set<AlimentoResumoDTO> alimentos) {

}
