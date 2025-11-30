package com.backend.sugarlab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import com.backend.sugarlab.DTO.CursoCadastroDto;
import com.backend.sugarlab.entity.Curso;
import com.backend.sugarlab.service.CursoService;

@RestController
@RequestMapping("/cursos/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class CursoController {

    @Autowired
    private CursoService cursoService;
    
    @GetMapping("/cursos")
    public ResponseEntity<List<Curso>> getAllCursos(){
        return ResponseEntity.ok(cursoService.resgatarTodosCursos());
    }
    
    @GetMapping("/cursos/titulo")
    public ResponseEntity<Curso> getOneCurso(@RequestParam String title){
        try {
            Curso curso = cursoService.resgatarUmCurso(title);
            return ResponseEntity.ok(curso);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/curso/{id}")
    public ResponseEntity<Curso> getCourseById(@PathVariable Integer id) { // Long e não Integer
        try {
            Curso curso = cursoService.resgatarCursoPorId(id);
            return ResponseEntity.ok(curso);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/newCurso")
    public ResponseEntity<Curso> createCurso(@RequestBody CursoCadastroDto dto){
        Curso novoCurso = cursoService.criarCurso(dto);
        return ResponseEntity.ok(novoCurso);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/edit/{id}")
    public ResponseEntity<Curso> editCurso(@PathVariable Integer id, @RequestBody CursoCadastroDto dto){
        try {
            Curso cursoAtualizado = cursoService.editarCurso(id, dto);
            return ResponseEntity.ok(cursoAtualizado);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/curso/{id}")
    public ResponseEntity<Void> deleteCurso(@PathVariable Integer id){
        try {
            cursoService.deletarCurso(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

}
