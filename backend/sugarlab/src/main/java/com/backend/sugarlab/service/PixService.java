package com.backend.sugarlab.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import org.springframework.stereotype.Service;

import com.backend.sugarlab.payment.PixGenerator;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

@Service
public class PixService {
    public byte[] gerarQrCode(String chavePix, String nome, String cidade, double valor, String txId)
            throws WriterException, IOException {
        String codigoPix = PixGenerator.gerarCodigoPix(chavePix, nome, cidade, valor, txId);

        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = qrCodeWriter.encode(codigoPix, BarcodeFormat.QR_CODE, 300, 300);

        ByteArrayOutputStream pngOutput = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(bitMatrix, "PNG", pngOutput);

        return pngOutput.toByteArray();
    }
}
