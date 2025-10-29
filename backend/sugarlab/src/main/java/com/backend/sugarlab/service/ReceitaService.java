package com.backend.sugarlab.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.ReceitaDTO;
import com.backend.sugarlab.entity.Alimento;
import com.backend.sugarlab.entity.Receita;
import com.backend.sugarlab.repository.AlimentoRepository;
import com.backend.sugarlab.repository.ReceitaRepository;

import jakarta.persistence.EntityExistsException;

@Service
public class ReceitaService {
    
    @Autowired
    ReceitaRepository receitaRespository;

    @Autowired
    AlimentoRepository alimentoRepository;

    public ReceitaService(ReceitaRepository receitaRespository){
        this.receitaRespository = receitaRespository;
    }

    public Receita createReceita(ReceitaDTO receitaDto){
        if(receitaDto.titulo() == ""){
            throw new EntityExistsException("Receita with no datas!"); 
        }

        Receita receita = new Receita();
        receita.setTitulo(receitaDto.titulo());

        Set<Alimento> alimentos = new HashSet<>(alimentoRepository.findAllById(receitaDto.alimentos()));
        System.out.println("Alimentos: " + alimentos);
        receita.setAlimentos(alimentos);

        return receitaRespository.save(receita);
    }

    public List<Receita> resgatarTodasReceitas(){
        return receitaRespository.findAll();
    }

    public Receita resgatarUmaReceita(String nomeReceita){
        Receita receita = receitaRespository.findByTitulo(nomeReceita)
            .orElseThrow(() -> new RuntimeException("Receita nao encontrada"));

        return receita;
    }

    public Receita editarReceita(int id, ReceitaDTO dto){
        Receita existente = receitaRespository.findById(id)
            .orElseThrow(() -> new RuntimeException("Receita não encontrada!"));

        existente.setTitulo(dto.titulo());
        
        Set<Alimento> alimentos = new HashSet<>(alimentoRepository.findAllById(dto.alimentos()));
        existente.setAlimentos(alimentos);

        return receitaRespository.save(existente);
    }

    public void deletarReceita(Integer id) {
        Receita receita = receitaRespository.findById(id)
            .orElseThrow(() -> new RuntimeException("Receita não encontrada"));

        receita.getAlimentos().clear();
        receitaRespository.delete(receita);
    }
}
