package com.sushant.jobportal.dto;

import com.sushant.jobportal.model.JobType;
import com.sushant.jobportal.model.Status;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ApplicationResponse {

    private Long id;

    private JobType jobType;

    private LocalDateTime appliedAt;

    private Status status;

    // USER DETAILS

    private Long userId;

    private String candidateEmail;

    // POST DETAILS

    private Long postId;

    private String title;

    private String companyName;
}