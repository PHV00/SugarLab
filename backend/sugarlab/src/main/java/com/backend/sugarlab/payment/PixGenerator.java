package com.backend.sugarlab.payment;

import java.nio.charset.StandardCharsets;
import java.util.Locale;
import java.text.Normalizer;

public class PixGenerator {

    public static String gerarCodigoPix(String chavePix, String nomeRecebedor, String cidade, double valor, String txId) {
        // formata valor
        String valorStr = String.format(Locale.US, "%.2f", valor);

        // formata chave PIX (telefone deve ser +55...)
        String chaveFormatada = chavePix.startsWith("+") ? chavePix : "+55" + chavePix;

        // limpa nome, cidade e txId
        String nomeLimpo = limparTexto(nomeRecebedor, 25);
        String cidadeLimpo = limparTexto(cidade, 15);
        String txIdLimpo = limparTexto(txId, 25);

        // monta payload
        String payloadFormatIndicator = "000201";
        String merchantAccountInfo = montarCampo("26", 
            montarCampo("00", "BR.GOV.BCB.PIX") +
            montarCampo("01", chaveFormatada)
        );
        String merchantCategoryCode = "52040000";
        String transactionCurrency = "5303986";
        String transactionAmount = montarCampo("54", valorStr);
        String countryCode = "5802BR";
        String merchantName = montarCampo("59", nomeLimpo);
        String merchantCity = montarCampo("60", cidadeLimpo);
        String additionalDataField = montarCampo("62", montarCampo("05", txIdLimpo));

        // junta tudo
        String semCRC = payloadFormatIndicator + merchantAccountInfo + merchantCategoryCode +
                        transactionCurrency + transactionAmount + countryCode +
                        merchantName + merchantCity + additionalDataField + "6304";

        // calcula CRC16 final
        String crc = calcularCRC16(semCRC);
        return semCRC + crc;
    }

    private static String montarCampo(String id, String valor) {
        String tamanho = String.format("%02d", valor.length());
        return id + tamanho + valor;
    }

    private static String limparTexto(String texto, int maxLen) {
        if (texto == null) texto = "";
        // remove acentos
        texto = Normalizer.normalize(texto, Normalizer.Form.NFD)
                .replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");
        // remove caracteres inválidos
        texto = texto.replaceAll("[^A-Za-z0-9 ]", "");
        // limita tamanho
        if (texto.length() > maxLen) texto = texto.substring(0, maxLen);
        return texto;
    }

    private static String calcularCRC16(String payload) {
        int polinomio = 0x1021;
        int resultado = 0xFFFF;

        byte[] bytes = payload.getBytes(StandardCharsets.UTF_8);
        for (byte b : bytes) {
            resultado ^= (b << 8);
            for (int i = 0; i < 8; i++) {
                if ((resultado & 0x8000) != 0) {
                    resultado = (resultado << 1) ^ polinomio;
                } else {
                    resultado <<= 1;
                }
                resultado &= 0xFFFF;
            }
        }
        return String.format("%04X", resultado);
    }
}
