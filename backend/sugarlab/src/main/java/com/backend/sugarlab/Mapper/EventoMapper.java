package com.backend.sugarlab.Mapper;

import com.backend.sugarlab.DTO.EventoDTO;
import com.backend.sugarlab.entity.Evento;

public class EventoMapper {
    public static EventoDTO toDTO(Evento evento) {
        return new EventoDTO(
            evento.getNome(),
            evento.getDescricao(),
            evento.getLocalizacao()
        );
    }

    public static Evento toEvento(EventoDTO eventoDTO) {
        Evento evento = new Evento();
        evento.setNome(eventoDTO.nome());
        evento.setDescricao(eventoDTO.descricao());
        evento.setLocalizacao(eventoDTO.localizacao());

        return evento;
    }
}