package com.sushant.jobportal.controller;

import com.sushant.jobportal.dto.ApplicationReq;
import com.sushant.jobportal.model.Profile;
import com.sushant.jobportal.repository.UserRepository;
import com.sushant.jobportal.service.ApplicationService;
import com.sushant.jobportal.service.PostService;
import com.sushant.jobportal.service.ProfileService;
import com.sushant.jobportal.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/candidate")
public class CandidateController {


    private final ApplicationService applicationService;
    private final UserService userService;
    private final PostService postService;


    @PostMapping("/apply/{userId}/{postId}")
    public ResponseEntity<?> apply(@PathVariable Long userId,
                                   @PathVariable Long postId,
                                   @RequestBody ApplicationReq req){

        return new ResponseEntity<>(applicationService.apply
                (userId,postId,req),HttpStatus.CREATED);
    }

    @GetMapping("/all/post")
    public ResponseEntity<?> getAllRecruitersPost(){
        return new ResponseEntity<>(postService.getAllRecruiterPost(),HttpStatus.OK);
    }

}
