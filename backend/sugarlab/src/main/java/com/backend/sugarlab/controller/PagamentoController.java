package com.backend.sugarlab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.sugarlab.DTO.AssinaturaDTO;
import com.backend.sugarlab.DTO.PagamentoDTO;
import com.backend.sugarlab.entity.Assinatura;
import com.backend.sugarlab.entity.Pagamento;
import com.backend.sugarlab.repository.AssinaturaRepository;
import com.backend.sugarlab.repository.PagamentoRepository;
import com.backend.sugarlab.service.AssinaturaService;
import com.backend.sugarlab.service.PagamentoService;

@RestController
@RequestMapping("/pagamentos/v1")
public class PagamentoController {

    @Autowired
    PagamentoRepository pagamentoRepository;

    @Autowired
    PagamentoService pagamentoService;

    @PostMapping("/newPagamento")
    public ResponseEntity<Pagamento> createPagamento(@RequestBody PagamentoDTO dto){
        Pagamento novoPagamento = pagamentoService.criarPagamento(dto);

        return ResponseEntity.ok().body(novoPagamento);
    }

    @GetMapping("/pagamentos")
    public ResponseEntity<List<Pagamento>> getAllPagamentos(){
        return ResponseEntity.ok().body(pagamentoService.resgatarTodosPagamentos());
    }

    @GetMapping("/pagamentos/{id}")
    public ResponseEntity<Pagamento> getOnePagamento(@RequestParam int id){
        try{
            Pagamento pagamento = pagamentoService.resgatarUmPagamento(id);
            
            return ResponseEntity.ok(pagamento);
        }catch(RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("pagamentos/edit/{id}")
    public ResponseEntity<Pagamento> editPagamento(@PathVariable int id, @RequestBody PagamentoDTO dto){
        try {
            Pagamento newPagamento = pagamentoService.editarPagamento(id, dto);

            return ResponseEntity.ok(newPagamento);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("pagamentos/{id}")
    public ResponseEntity<Void> deletePagamento(int id){
        try {
            pagamentoService.deletarPagamento(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
