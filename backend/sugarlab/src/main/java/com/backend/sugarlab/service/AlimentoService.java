package com.backend.sugarlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.AlimentoCadastroDto;
import com.backend.sugarlab.Mapper.AlimentoMapper;
import com.backend.sugarlab.entity.Alimento;
import com.backend.sugarlab.repository.AlimentoRepository;

@Service
public class AlimentoService {
    
    @Autowired
    AlimentoRepository alimentoRepository;

    public Alimento criarAlimento(AlimentoCadastroDto dto){
        if(dto.getNome() == null || dto.getDescricao() == null) throw new IllegalArgumentException("Todos os campos devem ser preenchidos!");
        
        return alimentoRepository.save(AlimentoMapper.toAlimento(dto));    
    }

    public List<Alimento> resgatarTodosAlimentos(){
        return alimentoRepository.findAll();
    }

    public Alimento resgatarUmAlimento(String nomeAlimento){
        Alimento alimento = alimentoRepository.findByNome(nomeAlimento)
            .orElseThrow(() -> new RuntimeException("Alimento nao encontrado"));

        return alimento;
    }

    public Alimento editarAlimento(int id, AlimentoCadastroDto dto){
        Alimento existente = alimentoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Alimento não encontrado!"));

        existente.setNome(dto.getNome());
        existente.setDescricao(dto.getDescricao());

        return alimentoRepository.save(existente);
    }

    public void deletarAlimento(int id){
        Alimento alimento = alimentoRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Alimento não encontrado"));

        alimentoRepository.delete(alimento);
    }
}
