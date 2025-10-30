package com.backend.sugarlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.EventoDTO;
import com.backend.sugarlab.Mapper.EventoMapper;
import com.backend.sugarlab.entity.Evento;
import com.backend.sugarlab.repository.EventoRepository;

@Service
public class EventoService {
    
    @Autowired
    EventoRepository eventoRepository;
    
    public Evento criarEvento(EventoDTO dto){
        if(dto.nome() == null || dto.descricao() == null) throw new IllegalArgumentException("Todos os campos devem ser preenchidos!");

        return eventoRepository.save(EventoMapper.toEvento(dto));
    }

    public List<Evento> listarEventos(){
        return eventoRepository.findAll();
    }

    public Evento editarEvento(int id, EventoDTO dto){
        Evento existente = eventoRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Evento não Encontrado!"));

        existente.setNome(dto.nome());
        existente.setDescricao(dto.descricao());
        existente.setLocalizacao(dto.localizacao());

        return eventoRepository.save(existente);
    }

    public void deletarEvento(int id){
        Evento evento = eventoRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Evento não encontrado"));

        eventoRepository.delete(evento);
    }
}