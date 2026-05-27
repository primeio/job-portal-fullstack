package com.sushant.jobportal.controller;
import com.sushant.jobportal.dto.StatusUpdateRequest;

import com.sushant.jobportal.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/application")
public class ApplicationController {

    private final ApplicationService applicationService;

    @GetMapping("/all/{userId}")
    public ResponseEntity<?> getAllApplication(@PathVariable Long userId){
        return new ResponseEntity<>(applicationService.getAll(userId), HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getApplication(@PathVariable Long id){
        return new ResponseEntity<>(applicationService.getApplication(id),HttpStatus.OK);
    }
    @GetMapping("/post/{postId}")
    public ResponseEntity<?> getApplicationsByPost(

            @PathVariable Long postId
    ){

        return ResponseEntity.ok(

                applicationService
                        .getApplicationsByPost(postId)
        );
    }
    @PutMapping("/status/{applicationId}")
    public ResponseEntity<?> updateStatus(

            @PathVariable Long applicationId,

            @RequestBody StatusUpdateRequest request
    ){

        return ResponseEntity.ok(

                applicationService.updateStatus(

                        applicationId,

                        request.getStatus()
                )
        );
    }
}
