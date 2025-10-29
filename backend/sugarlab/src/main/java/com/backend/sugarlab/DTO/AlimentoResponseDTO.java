package com.backend.sugarlab.DTO;

import java.util.Set;

public record AlimentoResponseDTO(Integer id, String nome, String descricao, Set<CategoriaResumoDTO> categorias) {

}
