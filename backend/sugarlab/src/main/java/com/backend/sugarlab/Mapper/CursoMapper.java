package com.backend.sugarlab.Mapper;

import com.backend.sugarlab.DTO.CursoDTO;
import com.backend.sugarlab.entity.Curso;
import com.backend.sugarlab.entity.Modalidade;
import com.backend.sugarlab.entity.Receita;

public class CursoMapper {
    public static CursoDTO toDTO(Curso curso) {
        return new CursoDTO(
                curso.getNome(),
                curso.getDescricao(),
                curso.getImagem(),
                curso.getData(),
                curso.getHorario(),
                curso.getCarga_horaria(),
                curso.isStatus(),
                curso.getUrl_video(),
                curso.getModalidade(),
                curso.getReceita()
            );
    }

    public static Curso toCurso(CursoDTO cursoDTO, Modalidade modalidade, Receita receita) {
        Curso curso = new Curso();
        curso.setNome(cursoDTO.nome());
        curso.setDescricao(cursoDTO.descricao());
        curso.setImagem(cursoDTO.imagem());
        curso.setData(cursoDTO.data());
        curso.setHorario(cursoDTO.horario());
        curso.setCarga_horaria(cursoDTO.carga_horaria());
        curso.setStatus(cursoDTO.status());
        curso.setUrl_video(cursoDTO.url_video());
        curso.setModalidade(modalidade);
        curso.setReceita(receita);
        return curso;
    }
}
