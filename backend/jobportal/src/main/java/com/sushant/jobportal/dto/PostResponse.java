package com.sushant.jobportal.dto;

import com.sushant.jobportal.model.JobType;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PostResponse {

    private Long id;

    private String title;

    private String description;

    private String companyName;

    private String experience;

    private Double salary;

    private String location;

    private JobType jobType;
}