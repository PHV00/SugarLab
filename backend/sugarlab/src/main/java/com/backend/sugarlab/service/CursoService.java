package com.backend.sugarlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.CursoDTO;
import com.backend.sugarlab.Mapper.CursoMapper;
import com.backend.sugarlab.entity.Curso;
import com.backend.sugarlab.entity.Modalidade;
import com.backend.sugarlab.entity.Receita;
import com.backend.sugarlab.repository.CursoRepository;
import com.backend.sugarlab.repository.ModalidadeRepository;
import com.backend.sugarlab.repository.ReceitaRepository;

@Service
public class CursoService {
    
    @Autowired
    CursoRepository cursoRepository;

    @Autowired
    ModalidadeRepository modalidadeRepository;

    @Autowired
    ReceitaRepository receitaRepository;

    public Curso criarCurso(CursoDTO dto){
        Modalidade modalidade = modalidadeRepository.findById(dto.modalidade().getId())
            .orElseThrow(() -> new IllegalArgumentException("Modalidade não encontrada!"));
        
        Receita receita = receitaRepository.findById(dto.receita().getId())
            .orElseThrow(() -> new IllegalArgumentException("Receita não encontrada!"));
        
        Curso curso = CursoMapper.toCurso(dto, modalidade, receita);

        return cursoRepository.save(curso);
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
        existente.setUrl_video(dto.url_video());
        existente.setModalidade(dto.modalidade());
        existente.setReceita(dto.receita());

        return cursoRepository.save(existente);
    }

    public void deletarCurso(int id){
        Curso curso = cursoRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Curso não encontrado"));

        cursoRepository.delete(curso);
    }
}
