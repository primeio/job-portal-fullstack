package com.sushant.jobportal.dto;

import com.sushant.jobportal.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileRequest {


    private String fullName;


    private String skills;


    private String education;

    private String location;


    private String experience;


    private String phone;

    private String resumeUrl;

    private String companyName;

    private String companyWebsite;

    private String designation;

}
