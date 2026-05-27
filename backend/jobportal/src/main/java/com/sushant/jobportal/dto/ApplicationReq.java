package com.sushant.jobportal.dto;

import com.sushant.jobportal.model.JobType;

import com.sushant.jobportal.model.Status;
import lombok.Data;

@Data
public class ApplicationReq {


    private Status status;

    private JobType jobType;

}
