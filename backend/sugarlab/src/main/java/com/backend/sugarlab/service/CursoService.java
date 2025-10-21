package com.backend.sugarlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.CursoDTO;
import com.backend.sugarlab.Mapper.CursoMapper;
import com.backend.sugarlab.entity.Curso;
import com.backend.sugarlab.repository.CursoRepository;

@Service
public class CursoService {
    
    @Autowired
    CursoRepository cursoRepository;

    public Curso criarCurso(CursoDTO dto){
        if(dto.nome().isEmpty() || dto.descricao().isEmpty() || dto.imagem().isEmpty()) throw new IllegalArgumentException("Todos os campos devem ser preenchidos!");
        
        return cursoRepository.save(CursoMapper.toCurso(dto));    
    }

    public List<Curso> resgatarTodosCursos(){
        return cursoRepository.findAll();
    }

    public Curso resgatarUmCurso(int idCurso){
        Curso curso = cursoRepository.findById(idCurso)
            .orElseThrow(() -> new RuntimeException("Curso nao encontrado"));

        return curso;
    }

    public Curso editarCurso(int id, CursoDTO dto){
        Curso existente = cursoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Curso não encontrado!"));

        existente.setNome(dto.nome());
        existente.setDescricao(dto.descricao());
        existente.setImagem(dto.imagem());
        existente.setData(dto.data());
        existente.setHorario(dto.horario());
        existente.setCarga_horaria(dto.carga_horaria());
        existente.setStatus(dto.status());

        return cursoRepository.save(existente);
    }

    public void deletarCurso(int id){
        Curso curso = cursoRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Curso não encontrado"));

        cursoRepository.delete(curso);
    }
}
