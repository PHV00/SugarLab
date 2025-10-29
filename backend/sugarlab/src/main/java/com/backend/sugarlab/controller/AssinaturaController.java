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

import com.backend.sugarlab.DTO.AssinaturaDTO;
import com.backend.sugarlab.entity.Assinatura;
import com.backend.sugarlab.repository.AssinaturaRepository;
import com.backend.sugarlab.service.AssinaturaService;

@RestController
@RequestMapping("/assinaturas/v1")
public class AssinaturaController {

    @Autowired
    AssinaturaRepository assinaturaRepository;

    @Autowired
    AssinaturaService assinaturaService;

    @PostMapping("/newAssinatura")
    public ResponseEntity<Assinatura> createAssinatura(@RequestBody AssinaturaDTO dto){
        Assinatura novaAssinatura = assinaturaService.criarAssinatura(dto);

        return ResponseEntity.ok().body(novaAssinatura);
    }

    @GetMapping("/assinaturas")
    public ResponseEntity<List<Assinatura>> getAllAssinaturas(){
        return ResponseEntity.ok().body(assinaturaService.resgatarTodasAssinaturas());
    }

    @GetMapping("/assinaturas/{id}")
    public ResponseEntity<Assinatura> getOneAssinatura(@RequestParam int id){
        try{
            Assinatura assinatura = assinaturaService.resgatarUmaAssinatura(id);
            
            return ResponseEntity.ok(assinatura);
        }catch(RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("assinaturas/edit/{id}")
    public ResponseEntity<Assinatura> editAssinatura(@PathVariable int id, @RequestBody AssinaturaDTO dto){
        try {
            Assinatura newAssinatura = assinaturaService.editarAssinatura(id, dto);

            return ResponseEntity.ok(newAssinatura);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("assinaturas/{id}")
    public ResponseEntity<Void> deleteAssinatura(int id){
        try {
            assinaturaService.deletarAssinatura(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
