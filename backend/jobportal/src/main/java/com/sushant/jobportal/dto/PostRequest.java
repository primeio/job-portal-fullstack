package com.sushant.jobportal.dto;

import com.sushant.jobportal.model.JobType;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostRequest {

    private Long id;


    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "description is required")
    @Size(min = 10,max = 2000)
    private String description;

    @NotBlank(message = "Company name is required.")
    private String companyName;

    @NotBlank(message = "Experience is required.")
    private String experience;

    @NotNull(message = "Salary required.")
    @Positive(message = "salary cannot be negative.")
    private Double salary;

    @NotBlank(message = "Location is required.")
    private String location;


    @NotNull(message = "Job type required")
    private JobType jobType;
}
