package com.sushant.jobportal.controller;

import com.sushant.jobportal.dto.LoginReq;
import com.sushant.jobportal.dto.RegisterReq;
import com.sushant.jobportal.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class HomeController {

    private final UserService userService;

    // HOME

    @GetMapping("/")
    public ResponseEntity<?> home(){

        return new ResponseEntity<>(

                "This is home",

                HttpStatus.OK
        );
    }

    // REGISTER

    @PostMapping("/register")
    public ResponseEntity<?> register(

            @Valid
            @RequestBody RegisterReq req
    ){

        return new ResponseEntity<>(

                userService.register(req),

                HttpStatus.CREATED
        );
    }

    // LOGIN

    @PostMapping("/login")
    public ResponseEntity<?> login(

            @Valid
            @RequestBody LoginReq req
    ){

        return ResponseEntity.ok(

                userService.login(req)
        );
    }
}