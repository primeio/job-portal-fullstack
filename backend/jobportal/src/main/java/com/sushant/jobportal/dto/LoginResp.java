package com.sushant.jobportal.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResp {

    private String token;

    private String role;

    private Long userId;

    private String message;
}