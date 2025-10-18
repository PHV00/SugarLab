package com.backend.sugarlab.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    //Metódo que desabilita a segurança para testar os endpoints
    
        // @Bean
        // public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        //     http
        //         .csrf().disable()
        //         .authorizeHttpRequests()
        //             .requestMatchers(
        //                 "/user/v1/newUser",
        //                 "/api/login",
        //                 "/alimentos/v1/*",
        //                 "/receitas/v1/*"
        //                 ).permitAll()
        //             .anyRequest().authenticated()
        //         .and()
        //         .httpBasic();

        //     return http.build();
        // }
}
