package com.sushant.jobportal.dto;

import com.sushant.jobportal.model.Status;
import lombok.Data;

@Data
public class StatusUpdateRequest {

    private Status status;
}