package com.backend.sugarlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.ModalidadeDTO;
import com.backend.sugarlab.Mapper.ModalidadeMapper;
import com.backend.sugarlab.entity.Modalidade;
import com.backend.sugarlab.repository.ModalidadeRepository;

@Service
public class ModalidadeService {
    
    @Autowired
    ModalidadeRepository modalidadeRepository;

    public Modalidade criarModalidade(ModalidadeDTO dto){
        if(dto.nome().isEmpty() || dto.descricao().isEmpty()) throw new IllegalArgumentException("Todos os campos devem ser preenchidos!");
        
        return modalidadeRepository.save(ModalidadeMapper.toModalidade(dto));    
    }

    public List<Modalidade> resgatarTodasModalidades(){
        return modalidadeRepository.findAll();
    }

    public Modalidade resgatarUmModalidade(int idModalidade){
        Modalidade modalidade = modalidadeRepository.findById(idModalidade)
            .orElseThrow(() -> new RuntimeException("Modalidade nao encontrada"));

        return modalidade;
    }

    public Modalidade editarModalidade(int id, ModalidadeDTO dto){
        Modalidade existente = modalidadeRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Modalidade não encontrada!"));

        existente.setNome(dto.nome());
        existente.setDescricao(dto.descricao());

        return modalidadeRepository.save(existente);
    }

    public void deletarModalidade(int id){
        Modalidade modalidade = modalidadeRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Modalidade não encontrada"));

        modalidadeRepository.delete(modalidade);
    }
}
