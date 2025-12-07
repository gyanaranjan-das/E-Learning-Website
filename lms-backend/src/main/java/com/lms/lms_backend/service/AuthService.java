package com.lms.lms_backend.service;

import com.lms.lms_backend.dto.RegisterRequest;
import com.lms.lms_backend.model.User;
import com.lms.lms_backend.model.UserRole;
import com.lms.lms_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor // Lombok magic: creates constructor for final fields (Injection)
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User register(RegisterRequest request) {
        // 1. Check if user already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already in use");
        }

        // 2. Create new User entity
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        
        // 3. Hash the password! Never save plain text.
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        
        // 4. Default role is STUDENT
        user.setRole(UserRole.STUDENT);

        // 5. Save to DB
        return userRepository.save(user);
    }
}