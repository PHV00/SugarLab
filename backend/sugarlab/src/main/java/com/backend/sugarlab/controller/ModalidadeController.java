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

import com.backend.sugarlab.DTO.CursoDTO;
import com.backend.sugarlab.DTO.ModalidadeDTO;
import com.backend.sugarlab.entity.Curso;
import com.backend.sugarlab.entity.Modalidade;
import com.backend.sugarlab.repository.CursoRepository;
import com.backend.sugarlab.repository.ModalidadeRepository;
import com.backend.sugarlab.service.CursoService;
import com.backend.sugarlab.service.ModalidadeService;

@RestController
@RequestMapping("/modalidades/v1")
public class ModalidadeController {

    @Autowired
    ModalidadeRepository modalidadeRepository;

    @Autowired
    ModalidadeService modalidadeService;

    @PostMapping("/newModalidade")
    public ResponseEntity<Modalidade> createModalidade(@RequestBody ModalidadeDTO dto){
        Modalidade novaModalidade = modalidadeService.criarModalidade(dto);

        return ResponseEntity.ok().body(novaModalidade);
    }

    @GetMapping("/modalidades")
    public ResponseEntity<List<Modalidade>> getAllModalidades(){
        return ResponseEntity.ok().body(modalidadeService.resgatarTodasModalidades());
    }

    @GetMapping("/modalidades/{id}")
    public ResponseEntity<Modalidade> getOneModalidade(@RequestParam int id){
        try{
            Modalidade modalidade = modalidadeService.resgatarUmModalidade(id);
            
            return ResponseEntity.ok(modalidade);
        }catch(RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("modalidades/edit/{id}")
    public ResponseEntity<Modalidade> editModalidade(@PathVariable int id, @RequestBody ModalidadeDTO dto){
        try {
            Modalidade newModalidade = modalidadeService.editarModalidade(id, dto);

            return ResponseEntity.ok(newModalidade);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("modalidades/{id}")
    public ResponseEntity<Void> deleteModalidade(int id){
        try {
            modalidadeService.deletarModalidade(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
