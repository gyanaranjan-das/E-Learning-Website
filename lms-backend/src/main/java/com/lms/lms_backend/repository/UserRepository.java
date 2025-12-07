package com.lms.lms_backend.repository;

import java.util.Optional;
import com.lms.lms_backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String>{
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}

