package com.backend.sugarlab.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.AlimentoResumoDTO;
import com.backend.sugarlab.DTO.CategoriaDTO;
import com.backend.sugarlab.DTO.CategoriaResponseDTO;
import com.backend.sugarlab.entity.Alimento;
import com.backend.sugarlab.entity.Categoria;
import com.backend.sugarlab.repository.AlimentoRepository;
import com.backend.sugarlab.repository.CategoriaRepository;

@Service
public class CategoriaService {

    private final AlimentoRepository alimentoRepository;
    private final CategoriaRepository categoriaRepository;

    public CategoriaService(AlimentoRepository alimentoRepository, CategoriaRepository categoriaRepository){
        this.alimentoRepository = alimentoRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public CategoriaResponseDTO criarCategoria(CategoriaDTO dto){
        Categoria categoria = new Categoria();
        categoria.setNome(dto.nome());

        Set<Alimento> alimentos = new HashSet<>(alimentoRepository.findAllById(dto.alimentosIds()));
        categoria.setAlimentos(alimentos);

        Categoria salvo = categoriaRepository.save(categoria);

        return toResponseDTO(salvo);
    }

    public List<CategoriaResponseDTO> listarCategorias() {
        return categoriaRepository.findAll().stream()
                .map(this::toResponseDTO)
                .toList();
    }

    private CategoriaResponseDTO toResponseDTO(Categoria categoria) {
        Set<AlimentoResumoDTO> alimentos = categoria.getAlimentos().stream()
                .map(a -> new AlimentoResumoDTO(a.getId(), a.getNome(), a.getDescricao()))
                .collect(Collectors.toSet());

        return new CategoriaResponseDTO(categoria.getId(), categoria.getNome(), alimentos);
    }
}
