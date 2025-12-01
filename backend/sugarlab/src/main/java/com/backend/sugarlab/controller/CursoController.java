package com.backend.sugarlab.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
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

    @PostMapping("/upload-video")
    public ResponseEntity<String> uploadVideo(@RequestParam("file") MultipartFile file) {
        try {
            String nomeArquivo = file.getOriginalFilename();
            Path pasta = Paths.get("backend/sugarlab/src/main/java/com/backend/sugarlab/uploads/videos/"); // Cria dentro do diretório do projeto
            Files.createDirectories(pasta); // Garante que a pasta exista


            Path caminho = pasta.resolve(nomeArquivo);
            Files.copy(file.getInputStream(), caminho, StandardCopyOption.REPLACE_EXISTING);

            String urlVideo = "backend/sugarlab/src/main/java/com/backend/sugarlab/uploads/videos/" + nomeArquivo;
            return ResponseEntity.ok(urlVideo);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body("Erro ao fazer upload do vídeo: " + e.getMessage());
        }
    }
}
