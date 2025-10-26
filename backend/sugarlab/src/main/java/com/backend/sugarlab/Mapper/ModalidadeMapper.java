package com.backend.sugarlab.Mapper;

import com.backend.sugarlab.DTO.ModalidadeDTO;
import com.backend.sugarlab.entity.Modalidade;

public class ModalidadeMapper {
    public static ModalidadeDTO toDTO(Modalidade modalidade) {
        return new ModalidadeDTO(
            modalidade.getNome(),
            modalidade.getDescricao()
        );
    }

    public static Modalidade toModalidade(ModalidadeDTO modalidadeDTO) {
        Modalidade modalidade = new Modalidade();
        modalidade.setNome(modalidadeDTO.nome());
        modalidade.setDescricao(modalidadeDTO.descricao());
        
        return modalidade;
    }
}
