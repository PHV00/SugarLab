package com.backend.sugarlab.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.AlimentoCadastroDto;
import com.backend.sugarlab.DTO.AlimentoResponseDTO;
import com.backend.sugarlab.DTO.CategoriaResumoDTO;
import com.backend.sugarlab.entity.Alimento;
import com.backend.sugarlab.entity.Categoria;
import com.backend.sugarlab.repository.AlimentoRepository;
import com.backend.sugarlab.repository.CategoriaRepository;

@Service
public class AlimentoService {
    
    private final AlimentoRepository alimentoRepository;
    private final CategoriaRepository categoriaRepository;

    public AlimentoService(AlimentoRepository alimentoRepository, CategoriaRepository categoriaRepository){
        this.alimentoRepository = alimentoRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public AlimentoResponseDTO criarAlimento(AlimentoCadastroDto dto) {
        Alimento alimento = new Alimento();
        alimento.setNome(dto.nome());
        alimento.setDescricao(dto.descricao());

        Set<Categoria> categorias = new HashSet<>(categoriaRepository.findAllById(dto.categoriasIds()));
        alimento.setCategorias(categorias);

        Alimento salvo = alimentoRepository.save(alimento);

        return toResponseDTO(salvo);
    }

    public List<AlimentoResponseDTO> listarAlimentos() {
        return alimentoRepository.findAll().stream()
                .map(this::toResponseDTO)
                .toList();
    }

    private AlimentoResponseDTO toResponseDTO(Alimento alimento) {
        Set<CategoriaResumoDTO> categorias = alimento.getCategorias().stream()
                .map(c -> new CategoriaResumoDTO(c.getId(), c.getNome()))
                .collect(Collectors.toSet());

        return new AlimentoResponseDTO(alimento.getId(), alimento.getNome(), alimento.getDescricao(), categorias);
    }
}
