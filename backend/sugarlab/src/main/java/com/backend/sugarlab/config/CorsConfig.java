package com.backend.sugarlab.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuração global de CORS para permitir que o frontend (React)
 * acesse os endpoints do backend durante o desenvolvimento.
 */
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // Define quais endpoints e origens estão liberados
                registry.addMapping("/**") // libera todos os endpoints
                        .allowedOrigins("http://localhost:5173") // origem do seu frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*"); // permite qualquer header
            }
        };
    }
}
