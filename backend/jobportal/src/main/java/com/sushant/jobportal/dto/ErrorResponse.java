package com.sushant.jobportal.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ErrorResponse {

    private String message;

    private LocalDateTime timeStamp;

    private int status;
}
