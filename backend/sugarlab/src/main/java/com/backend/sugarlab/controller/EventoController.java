package com.backend.sugarlab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.sugarlab.DTO.EventoDTO;
import com.backend.sugarlab.entity.Evento;
import com.backend.sugarlab.repository.EventoRepository;
import com.backend.sugarlab.service.EventoService;

@RestController
@RequestMapping("/eventos/v1")
public class EventoController {
    
    @Autowired
    EventoRepository eventoRepository;

    @Autowired
    EventoService eventoService;

    @PostMapping("/newEvento")
    public ResponseEntity<Evento> createEvento(@RequestBody EventoDTO dto){
        Evento novoEvento = eventoService.criarEvento(dto);

        return ResponseEntity.ok().body(novoEvento);
    }

    @GetMapping("/eventos")
    public ResponseEntity<List<Evento>> getAllEventos(){
        return ResponseEntity.ok().body(eventoService.listarEventos());
    }
}