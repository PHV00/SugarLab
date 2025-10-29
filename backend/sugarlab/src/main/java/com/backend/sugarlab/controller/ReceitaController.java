package com.backend.sugarlab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.sugarlab.DTO.ReceitaDTO;
import com.backend.sugarlab.entity.Receita;
import com.backend.sugarlab.repository.ReceitaRepository;
import com.backend.sugarlab.service.ReceitaService;

@RestController
@RequestMapping("/receitas/v1")
public class ReceitaController {

    @Autowired
    ReceitaRepository receitaRepository;

    @Autowired
    ReceitaService receitaService;

    @PostMapping("/newReceita")
    public ResponseEntity<Receita> createReceita(@RequestBody ReceitaDTO dto){
        Receita novaReceita = receitaService.createReceita(dto);

        return ResponseEntity.ok().body(novaReceita);
    }

    @GetMapping("/receitas")
    public ResponseEntity<List<Receita>> getAllReceitas(){
        return ResponseEntity.ok().body(receitaService.resgatarTodasReceitas());
    }

    @GetMapping("/receitas/titulo")
    public ResponseEntity<Receita> getOneReceita(@RequestParam String titulo){
        try{
            Receita receita = receitaService.resgatarUmaReceita(titulo);
            
            return ResponseEntity.ok(receita);
        }catch(RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("receitas/edit/{id}")
    public ResponseEntity<Receita> editReceita(@PathVariable int id, @RequestBody ReceitaDTO dto){
        try {
            Receita newReceita = receitaService.editarReceita(id, dto);

            return ResponseEntity.ok(newReceita);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("receitas/{id}")
    public ResponseEntity<Void> deleteReceita(int id){
        try {
            receitaService.deletarReceita(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
