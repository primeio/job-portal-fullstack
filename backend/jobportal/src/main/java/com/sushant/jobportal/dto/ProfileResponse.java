package com.sushant.jobportal.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProfileResponse {

    private Long id;

    private String fullName;


    private String skills;


    private String education;


    private String experience;


    private String phone;

    private String resumeUrl;

    private String email;

    private String location;

    private String companyName;

    private String companyWebsite;

    private String designation;
}
