package com.backend.sugarlab.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.sugarlab.DTO.ReceitaDTO;
import com.backend.sugarlab.DTO.ReceitaResponseDTO;
import com.backend.sugarlab.repository.ReceitaRepository;
import com.backend.sugarlab.service.ReceitaService;

@RestController
@RequestMapping("/receitas/v1")
public class ReceitaController {

    private final ReceitaRepository receitaRepository;
    private final ReceitaService receitaService;

    public ReceitaController(ReceitaRepository receitaRepository, ReceitaService receitaService){
        this.receitaRepository = receitaRepository; 
        this.receitaService = receitaService;
    }

    @PostMapping("/newReceita")
    public ResponseEntity<ReceitaResponseDTO> createReceita(@RequestBody ReceitaDTO dto){
        ReceitaResponseDTO novaReceita = receitaService.createReceita(dto);

        return ResponseEntity.ok().body(novaReceita);
    }

    @GetMapping("/receitas")
    public ResponseEntity<List<ReceitaResponseDTO>> getAllReceitas(){
        return ResponseEntity.ok().body(receitaService.resgatarTodasReceitas());
    }
}
