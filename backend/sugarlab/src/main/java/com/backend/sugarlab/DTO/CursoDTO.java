package com.backend.sugarlab.DTO;

import java.sql.Date;
import java.sql.Time;

import com.backend.sugarlab.entity.Modalidade;
import com.backend.sugarlab.entity.Receita;

public record CursoDTO(String nome, String descricao, String imagem, Date data, Time horario, float carga_horaria, boolean status, String url_video, Modalidade modalidade, Receita receita) {}
