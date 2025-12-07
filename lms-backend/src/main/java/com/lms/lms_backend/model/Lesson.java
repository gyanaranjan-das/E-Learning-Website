package com.lms.lms_backend.model;

import lombok.Data;

@Data
public class Lesson {
    private String title;
    private String videoUrl;
    private String content;
    private boolean isFreePreview;
}


