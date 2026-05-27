package com.sushant.jobportal.controller;

import com.sushant.jobportal.dto.ProfileRequest;
import com.sushant.jobportal.dto.ProfileResponse;
import com.sushant.jobportal.service.ProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("profile")
public class ProfileController {

    private final ProfileService profileService;

    @PostMapping("/{userId}")
    public ResponseEntity<ProfileResponse> addDetails(

            @Valid
            @RequestBody ProfileRequest req,

            @PathVariable Long userId){

        return new ResponseEntity<>(

                profileService.addDetails(req, userId),

                HttpStatus.CREATED
        );
    }

    @PostMapping("/resume/{userId}")
    public ResponseEntity<?> uploadResume(

            @RequestParam("file")
            MultipartFile file,

            @PathVariable Long userId)

            throws IOException {

        return ResponseEntity.ok(

                profileService.uploadResume(
                        file,
                        userId
                )
        );
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?>
    getProfile(

            @PathVariable Long userId){

        return ResponseEntity.ok(

                profileService.getProfile(userId)
        );
    }



}
