package com.lms.lms_backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.lms.lms_backend.model.Course;

public interface CoursesRepository extends MongoRepository<Course, String>{
    List<Course> findByInstructorId(String instructorId);
}
