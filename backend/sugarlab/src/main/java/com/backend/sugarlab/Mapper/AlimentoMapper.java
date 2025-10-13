package com.backend.sugarlab.Mapper;

import com.backend.sugarlab.DTO.AlimentoCadastroDto;
import com.backend.sugarlab.entity.Alimento;

public class AlimentoMapper {
    public static AlimentoCadastroDto toDTO(Alimento alimento) {
        return new AlimentoCadastroDto(
                alimento.getNome(),
                alimento.getDescricao()
            );
    }

    public static Alimento toAlimento(AlimentoCadastroDto alimentoDto) {
        Alimento alimento = new Alimento();
        alimento.setNome(alimentoDto.getNome());
        alimento.setDescricao(alimentoDto.getDescricao());
        return alimento;
    }
}
