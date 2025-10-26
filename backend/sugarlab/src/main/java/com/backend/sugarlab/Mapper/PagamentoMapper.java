package com.backend.sugarlab.Mapper;

import com.backend.sugarlab.DTO.PagamentoDTO;
import com.backend.sugarlab.entity.Assinatura;
import com.backend.sugarlab.entity.Pagamento;

public class PagamentoMapper {
    public static PagamentoDTO toDTO(Pagamento pagamento) {
        return new PagamentoDTO(
            pagamento.getNome(),
            pagamento.getChave(),
            pagamento.getAssinatura()
        );
    }

    public static Pagamento toPagamento(PagamentoDTO pagamentoDTO, Assinatura assinatura) {
        Pagamento pagamento = new Pagamento();
        pagamento.setNome(pagamentoDTO.nome());
        pagamento.setChave(pagamentoDTO.chave());
        pagamento.setAssinatura(assinatura);
        
        return pagamento;
    }
}
