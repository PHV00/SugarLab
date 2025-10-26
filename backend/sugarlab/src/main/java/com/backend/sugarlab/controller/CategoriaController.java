package com.backend.sugarlab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.sugarlab.DTO.CategoriaDTO;
import com.backend.sugarlab.DTO.CategoriaResponseDTO;
import com.backend.sugarlab.repository.CategoriaRepository;
import com.backend.sugarlab.service.CategoriaService;

@RestController
@RequestMapping("/categorias/v1")
public class CategoriaController {

    @Autowired
    CategoriaRepository categoriaRepository;

    @Autowired
    CategoriaService categoriaService;

    @PostMapping("/newCategoria")
    public ResponseEntity<CategoriaResponseDTO> createCategoria(@RequestBody CategoriaDTO dto){
        CategoriaResponseDTO novaCategoria = categoriaService.criarCategoria(dto);

        return ResponseEntity.ok().body(novaCategoria);
    }

    @GetMapping("/categorias")
    public ResponseEntity<List<CategoriaResponseDTO>> getAllCategorias(){
        return ResponseEntity.ok().body(categoriaService.listarCategorias());
    }
}