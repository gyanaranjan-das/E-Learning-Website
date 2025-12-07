package com.lms.lms_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Disable CSRF (Cross-Site Request Forgery) because we are using stateless REST APIs
            // CSRF is important for session-based (cookie) apps, but annoying for JWT APIs.
            .csrf(AbstractHttpConfigurer::disable)
            
            // Define who can access what
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/health", "/api/v1/auth/**").permitAll() // Open to everyone
                .anyRequest().authenticated() // Everything else needs a login
            );

        return http.build();
    }

    // This Bean is used to encrypt passwords. 
    // We can inject "PasswordEncoder" anywhere in our app now.
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}