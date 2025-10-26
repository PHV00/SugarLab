package com.backend.sugarlab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.sugarlab.DTO.AlimentoCadastroDto;
import com.backend.sugarlab.DTO.AlimentoResponseDTO;
import com.backend.sugarlab.repository.AlimentoRepository;
import com.backend.sugarlab.service.AlimentoService;

@RestController
@RequestMapping("/alimentos/v1")
public class AlimentoController {

    @Autowired
    AlimentoRepository alimentoRepository;

    @Autowired
    AlimentoService alimentoService;

    @PostMapping("/newAlimento")
    public ResponseEntity<AlimentoResponseDTO> createAlimento(@RequestBody AlimentoCadastroDto dto){
        AlimentoResponseDTO novoAlimento = alimentoService.criarAlimento(dto);

        return ResponseEntity.ok().body(novoAlimento);
    }

    @GetMapping("/alimentos")
    public ResponseEntity<List<AlimentoResponseDTO>> getAllAlimentos(){
        return ResponseEntity.ok().body(alimentoService.listarAlimentos());
    }
}
