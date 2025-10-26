package com.backend.sugarlab.Mapper;

import com.backend.sugarlab.DTO.AssinaturaDTO;
import com.backend.sugarlab.entity.Assinatura;
import com.backend.sugarlab.entity.Curso;
import com.backend.sugarlab.entity.Usuario;

public class AssinaturaMapper {
    public static AssinaturaDTO toDTO(Assinatura assinatura) {
        return new AssinaturaDTO(
                assinatura.getCurso(),
                assinatura.getUsuario()
            );
    }

    public static Assinatura toAssinatura(AssinaturaDTO assinaturaDTO, Curso curso, Usuario usuario) {
        Assinatura assinatura = new Assinatura();
        assinatura.setCurso(curso);
        assinatura.setUsuario(usuario);
        return assinatura;
    }
}
