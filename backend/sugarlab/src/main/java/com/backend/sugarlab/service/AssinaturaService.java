package com.backend.sugarlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.AssinaturaDTO;
import com.backend.sugarlab.Mapper.AssinaturaMapper;
import com.backend.sugarlab.entity.Assinatura;
import com.backend.sugarlab.entity.Curso;
import com.backend.sugarlab.entity.Usuario;
import com.backend.sugarlab.repository.AssinaturaRepository;
import com.backend.sugarlab.repository.CursoRepository;
import com.backend.sugarlab.repository.UserRespository;

@Service
public class AssinaturaService {
    
    @Autowired
    AssinaturaRepository assinaturaRepository;

    @Autowired
    CursoRepository cursoRepository;

    @Autowired
    UserRespository userRespository;

    public Assinatura criarAssinatura(AssinaturaDTO dto){
        Curso curso = cursoRepository.findById(dto.curso().getId())
            .orElseThrow(() -> new IllegalArgumentException("Curso não encontrado!"));
        
        Usuario usuario = userRespository.findById(dto.usuario().getId())
            .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado!"));
        
        Assinatura assinatura = AssinaturaMapper.toAssinatura(dto, curso, usuario);

        return assinaturaRepository.save(assinatura);
    }

    public List<Assinatura> resgatarTodasAssinaturas(){
        return assinaturaRepository.findAll();
    }

    public Assinatura resgatarUmaAssinatura(int idAssinatura){
        Assinatura assinatura = assinaturaRepository.findById(idAssinatura)
            .orElseThrow(() -> new RuntimeException("Assinatura nao encontrada"));

        return assinatura;
    }

    public Assinatura editarAssinatura(int id, AssinaturaDTO dto){
        Curso curso = cursoRepository.findById(dto.curso().getId())
            .orElseThrow(() -> new IllegalArgumentException("Curso não encontrado!"));
        
        Usuario usuario = userRespository.findById(dto.usuario().getId())
            .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado!"));
        
        Assinatura existente = assinaturaRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Assinatura não encontrada!"));

        existente.setCurso(curso);
        existente.setUsuario(usuario);

        return assinaturaRepository.save(existente);
    }

    public void deletarAssinatura(int id){
        Assinatura assinatura = assinaturaRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Assinatura não encontrada"));

        assinaturaRepository.delete(assinatura);
    }
}
