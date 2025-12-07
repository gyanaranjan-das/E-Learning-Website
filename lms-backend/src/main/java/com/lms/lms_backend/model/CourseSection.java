package com.lms.lms_backend.model;

import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data
public class CourseSection {
    private String sectionTitle;
    private List<Lesson> lessons = new ArrayList<>();
}
