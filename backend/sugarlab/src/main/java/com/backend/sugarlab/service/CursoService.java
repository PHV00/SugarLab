package com.backend.sugarlab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.CursoCadastroDto;
import com.backend.sugarlab.entity.Assinatura;
import com.backend.sugarlab.entity.Curso;
import com.backend.sugarlab.entity.Receita;
import com.backend.sugarlab.repository.AssinaturaRepository;
import com.backend.sugarlab.repository.CursoRepository;
import com.backend.sugarlab.repository.ReceitaRepository;

import java.util.List;
import java.util.Optional;
import java.math.BigDecimal;


@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private AssinaturaRepository assinaturaRepository;

    @Autowired
    private ReceitaRepository receitaRepository;

    public Curso criarCurso(CursoCadastroDto dto) {
        Curso curso = new Curso();
        curso.setSlug(dto.getSlug());
        curso.setTitle(dto.getTitle());
        curso.setDescription(dto.getDescription());
        curso.setSummary(dto.getSummary());
        curso.setThumbnailUrl(dto.getThumbnailUrl());
        curso.setHighlights(dto.getHighlights());
        curso.setIncludes(dto.getIncludes());
        curso.setDateRange(dto.getDateRange());
        curso.setTimeRange(dto.getTimeRange());
        curso.setModality(dto.getModality());
        curso.setWorkloadHours(dto.getWorkloadHours());
        curso.setPrice(BigDecimal.valueOf(dto.getPrice()));        
        curso.setStatus(dto.getStatus());
        curso.setFeatured(dto.getFeatured());

        // Relacionamentos
        if (dto.getAssinaturaId() != null) {
            Assinatura assinatura = assinaturaRepository.findById(dto.getAssinaturaId())
                    .orElseThrow(() -> new RuntimeException("Assinatura não encontrada"));
            curso.setAssinatura(assinatura);
        }

        if (dto.getReceitaId() != null) {
            Receita receita = receitaRepository.findById(dto.getReceitaId())
                    .orElseThrow(() -> new RuntimeException("Receita não encontrada"));
            curso.setReceita(receita);
        }

        return cursoRepository.save(curso);
    }

    public List<Curso> resgatarTodosCursos() {
        return cursoRepository.findAll();
    }

    public Curso resgatarUmCurso(String title) {
        return cursoRepository.findByTitle(title)
                .orElseThrow(() -> new RuntimeException("Curso não encontrado"));
    }

    public Curso editarCurso(Integer id, CursoCadastroDto dto) {
        Curso curso = cursoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Curso não encontrado"));

        curso.setSlug(dto.getSlug());
        curso.setTitle(dto.getTitle());
        curso.setDescription(dto.getDescription());
        curso.setSummary(dto.getSummary());
        curso.setThumbnailUrl(dto.getThumbnailUrl());
        curso.setHighlights(dto.getHighlights());
        curso.setIncludes(dto.getIncludes());
        curso.setDateRange(dto.getDateRange());
        curso.setTimeRange(dto.getTimeRange());
        curso.setModality(dto.getModality());
        curso.setWorkloadHours(dto.getWorkloadHours());
        curso.setPrice(BigDecimal.valueOf(dto.getPrice()));        
        curso.setStatus(dto.getStatus());
        curso.setFeatured(dto.getFeatured());

        if (dto.getAssinaturaId() != null) {
            Assinatura assinatura = assinaturaRepository.findById(dto.getAssinaturaId())
                    .orElseThrow(() -> new RuntimeException("Assinatura não encontrada"));
            curso.setAssinatura(assinatura);
        }

        if (dto.getReceitaId() != null) {
            Receita receita = receitaRepository.findById(dto.getReceitaId())
                    .orElseThrow(() -> new RuntimeException("Receita não encontrada"));
            curso.setReceita(receita);
        }

        return cursoRepository.save(curso);
    }

    public void deletarCurso(Integer id) {
        Curso curso = cursoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Curso não encontrado"));
        cursoRepository.delete(curso);
    }
}
