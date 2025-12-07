package com.lms.lms_backend.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Document(collection = "courses")
public class Course {
    @Id
    private String id;

    private String title;
    private String description;
    private Double price;

    private String instructorId;

    private List<String> enrolledStudentIds = new ArrayList<>();

    private List<CourseSection> sections =new ArrayList<>(); 

    @CreatedDate
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
