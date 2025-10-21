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
import com.backend.sugarlab.entity.Curso;
import com.backend.sugarlab.repository.CursoRepository;
import com.backend.sugarlab.service.CursoService;

@RestController
@RequestMapping("/cursos/v1")
public class CursoController {

    @Autowired
    CursoRepository cursoRepository;

    @Autowired
    CursoService cursoService;

    @PostMapping("/newCurso")
    public ResponseEntity<Curso> createCurso(@RequestBody CursoDTO dto){
        Curso novoCurso = cursoService.criarCurso(dto);

        return ResponseEntity.ok().body(novoCurso);
    }

    @GetMapping("/cursos")
    public ResponseEntity<List<Curso>> getAllCursos(){
        return ResponseEntity.ok().body(cursoService.resgatarTodosCursos());
    }

    @GetMapping("/cursos/{id}")
    public ResponseEntity<Curso> getOneCurso(@RequestParam int id){
        try{
            Curso curso = cursoService.resgatarUmCurso(id);
            
            return ResponseEntity.ok(curso);
        }catch(RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("cursos/edit/{id}")
    public ResponseEntity<Curso> editCurso(@PathVariable int id, @RequestBody CursoDTO dto){
        try {
            Curso newCurso = cursoService.editarCurso(id, dto);

            return ResponseEntity.ok(newCurso);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("cursos/{id}")
    public ResponseEntity<Void> deleteCurso(int id){
        try {
            cursoService.deletarCurso(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
