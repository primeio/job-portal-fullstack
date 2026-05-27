package com.sushant.jobportal.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;


    private String skills;


    private String education;


    private String experience;


    private String phone;

    private String resumeUrl;

    private String companyName;

    private String companyWebsite;

    private String designation;

    private String location;

    @OneToOne()
    @JoinColumn(name = "user_id")
    private User user;
}
