package com.backend.sugarlab.controller;

import com.backend.sugarlab.service.PixService;
import com.google.zxing.WriterException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/pix")
public class PixController {

    @Autowired
    private PixService pixService;

    @GetMapping("/qrcode")
    public ResponseEntity<byte[]> gerarQrCode(
            @RequestParam String chave,
            @RequestParam double valor,
            @RequestParam(defaultValue = "SugarLab") String nome,
            @RequestParam(defaultValue = "JOINVILLE") String cidade,
            @RequestParam(defaultValue = "SUGARLAB001") String txid
    ) throws WriterException, IOException {

        byte[] imagem = pixService.gerarQrCode(chave, nome, cidade, valor, txid);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=qrcode.png")
                .contentType(MediaType.IMAGE_PNG)
                .body(imagem);
    }
}