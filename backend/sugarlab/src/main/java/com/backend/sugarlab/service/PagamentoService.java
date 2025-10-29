package com.backend.sugarlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.sugarlab.DTO.AssinaturaDTO;
import com.backend.sugarlab.DTO.PagamentoDTO;
import com.backend.sugarlab.Mapper.AssinaturaMapper;
import com.backend.sugarlab.Mapper.PagamentoMapper;
import com.backend.sugarlab.entity.Assinatura;
import com.backend.sugarlab.entity.Curso;
import com.backend.sugarlab.entity.Pagamento;
import com.backend.sugarlab.entity.Usuario;
import com.backend.sugarlab.repository.AssinaturaRepository;
import com.backend.sugarlab.repository.CursoRepository;
import com.backend.sugarlab.repository.PagamentoRepository;
import com.backend.sugarlab.repository.UserRespository;

@Service
public class PagamentoService {
    
    @Autowired
    PagamentoRepository pagamentoRepository;

    @Autowired
    AssinaturaRepository assinaturaRepository;

    public Pagamento criarPagamento(PagamentoDTO dto){        
        Assinatura assinatura = assinaturaRepository.findById(dto.assinatura().getId())
            .orElseThrow(() -> new IllegalArgumentException("Assinatura não encontrada!"));
        
        Pagamento pagamento = PagamentoMapper.toPagamento(dto, assinatura);

        return pagamentoRepository.save(pagamento);
    }

    public List<Pagamento> resgatarTodosPagamentos(){
        return pagamentoRepository.findAll();
    }

    public Pagamento resgatarUmPagamento(int idPagamento){
        Pagamento pagamento = pagamentoRepository.findById(idPagamento)
            .orElseThrow(() -> new RuntimeException("Pagamento nao encontrado"));

        return pagamento;
    }

    public Pagamento editarPagamento(int id, PagamentoDTO dto){        
        Assinatura assinatura = assinaturaRepository.findById(dto.assinatura().getId())
            .orElseThrow(() -> new IllegalArgumentException("Assinatura não encontrada!"));
        
        Pagamento existente = pagamentoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Pagamento não encontrado!"));

        existente.setNome(existente.getNome());
        existente.setChave(existente.getChave());
        existente.setAssinatura(assinatura);

        return pagamentoRepository.save(existente);
    }

    public void deletarPagamento(int id){
        Pagamento pagamento = pagamentoRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Pagamento não encontrado"));

        pagamentoRepository.delete(pagamento);
    }
}
