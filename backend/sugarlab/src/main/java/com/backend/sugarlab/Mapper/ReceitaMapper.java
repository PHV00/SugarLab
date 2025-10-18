package com.backend.sugarlab.Mapper;

import java.util.HashSet;
import java.util.Set;

import com.backend.sugarlab.DTO.ReceitaDTO;
import com.backend.sugarlab.entity.Alimento;
import com.backend.sugarlab.entity.Receita;

public class ReceitaMapper {

    public static Receita toReceita(ReceitaDTO receitaDTO) {
        
        Receita receita = new Receita();
        receita.setTitulo(receitaDTO.titulo());

        Set<Alimento> alimentos = new HashSet<>();
        receita.setAlimentos(alimentos);
        
        return receita;
    }
}
