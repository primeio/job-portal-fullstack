package com.sushant.jobportal.controller;

import com.sushant.jobportal.dto.PostRequest;
import com.sushant.jobportal.service.PostService;
import com.sushant.jobportal.service.ProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/recruiter")
public class RecruiterController {

    private final PostService postService;
    private final ProfileService profileService;

    @GetMapping("/posts/{userId}")
    public ResponseEntity<?> getPosts(@PathVariable Long userId){
        return new ResponseEntity<>(postService.getAllPost(userId), HttpStatus.OK);
   }

   @GetMapping("/{postId}")
    public ResponseEntity<?> getPost(@PathVariable Long postId){

        return new ResponseEntity<>(postService.getPost(postId),HttpStatus.OK);
   }
   @PostMapping("/create/{userId}")
    public ResponseEntity<?> createPost(@Valid @RequestBody PostRequest postDto,
                                        @PathVariable Long userId
                                        ){
        return new ResponseEntity<>(postService.createPost(postDto,userId),HttpStatus.CREATED);
   }

}
