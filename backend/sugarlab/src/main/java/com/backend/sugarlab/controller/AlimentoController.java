package com.backend.sugarlab.controller;

import java.net.http.HttpClient;
import java.util.List;

import org.apache.catalina.connector.Response;
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

import com.backend.sugarlab.DTO.AlimentoCadastroDto;
import com.backend.sugarlab.entity.Alimento;
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
    public ResponseEntity<Alimento> createAlimento(@RequestBody AlimentoCadastroDto dto){
        Alimento novoAlimento = alimentoService.criarAlimento(dto);

        return ResponseEntity.ok().body(novoAlimento);
    }

    @GetMapping("/alimentos")
    public ResponseEntity<List<Alimento>> getAllAlimentos(){
        return ResponseEntity.ok().body(alimentoService.resgatarTodosAlimentos());
    }

    @GetMapping("/alimentos/nome")
    public ResponseEntity<Alimento> getOneAlimento(@RequestParam String nome){
        try{
            Alimento alimento = alimentoService.resgatarUmAlimento(nome);
            
            return ResponseEntity.ok(alimento);
        }catch(RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("alimentos/edit/{id}")
    public ResponseEntity<Alimento> editAlimento(@PathVariable int id, @RequestBody AlimentoCadastroDto dto){
        try {
            Alimento newAlimento = alimentoService.editarAlimento(id, dto);

            return ResponseEntity.ok(newAlimento);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("alimentos/{id}")
    public ResponseEntity<Void> deleteAlimento(int id){
        try {
            alimentoService.deletarAlimento(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
