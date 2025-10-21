package com.backend.sugarlab.DTO;

import java.sql.Date;
import java.sql.Time;

public record CursoDTO(String nome, String descricao, String imagem, Date data, Time horario, float carga_horaria, boolean status) {}
