package com.backend.sugarlab.Mapper;

import com.backend.sugarlab.DTO.CursoDTO;
import com.backend.sugarlab.entity.Curso;

public class CursoMapper {
    public static CursoDTO toDTO(Curso curso) {
        return new CursoDTO(
                curso.getNome(),
                curso.getDescricao(),
                curso.getImagem(),
                curso.getData(),
                curso.getHorario(),
                curso.getCarga_horaria(),
                curso.isStatus()
            );
    }

    public static Curso toCurso(CursoDTO cursoDTO) {
        Curso curso = new Curso();
        curso.setNome(cursoDTO.nome());
        curso.setDescricao(cursoDTO.descricao());
        curso.setImagem(cursoDTO.imagem());
        curso.setData(cursoDTO.data());
        curso.setHorario(cursoDTO.horario());
        curso.setCarga_horaria(cursoDTO.carga_horaria());
        curso.setStatus(cursoDTO.status());
        return curso;
    }
}
