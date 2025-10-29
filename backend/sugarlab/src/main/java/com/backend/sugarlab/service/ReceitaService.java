package com.backend.sugarlab.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.AlimentoResumoDTO;
import com.backend.sugarlab.DTO.ReceitaDTO;
import com.backend.sugarlab.DTO.ReceitaResponseDTO;
import com.backend.sugarlab.entity.Alimento;
import com.backend.sugarlab.entity.Receita;
import com.backend.sugarlab.repository.AlimentoRepository;
import com.backend.sugarlab.repository.ReceitaRepository;

@Service
public class ReceitaService {
    
    private final ReceitaRepository receitaRespository;
    private final AlimentoRepository alimentoRepository;

    public ReceitaService(ReceitaRepository receitaRespository, AlimentoRepository alimentoRepository){
        this.receitaRespository = receitaRespository;
        this.alimentoRepository = alimentoRepository;
    }

    public ReceitaResponseDTO createReceita(ReceitaDTO receitaDto){
        Receita receita = new Receita();
        receita.setTitulo(receitaDto.titulo());
        
        Set<Alimento> alimentos = new HashSet<>(alimentoRepository.findAllById(receitaDto.alimentosIds()));
        receita.setAlimentos(alimentos);
        
        Receita salvo = receitaRespository.save(receita);
        
        return toResponseDTO(salvo);
        
    }

    public List<ReceitaResponseDTO> resgatarTodasReceitas(){
        return receitaRespository.findAll().stream()
               .map(this::toResponseDTO)
               .toList();
    }

    private ReceitaResponseDTO toResponseDTO(Receita receita) {
        Set<AlimentoResumoDTO> alimentos = receita.getAlimentos().stream()
                .map(a -> new AlimentoResumoDTO(a.getId(), a.getNome(), a.getDescricao()))
                .collect(Collectors.toSet());

        return new ReceitaResponseDTO(receita.getTitulo(), alimentos);
    }
}
