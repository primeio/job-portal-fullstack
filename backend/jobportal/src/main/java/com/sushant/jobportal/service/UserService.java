package com.sushant.jobportal.service;

import com.sushant.jobportal.config.JwtUtil;
import com.sushant.jobportal.dto.LoginReq;
import com.sushant.jobportal.dto.LoginResp;
import com.sushant.jobportal.dto.RegisterReq;
import com.sushant.jobportal.dto.RegisterResp;
import com.sushant.jobportal.model.User;
import com.sushant.jobportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtUtil jwtUtil;

    private final AuthenticationManager authenticationManager;

    // REGISTER USER

    public RegisterResp register(RegisterReq req){

        RegisterResp response =
                new RegisterResp();

        // CHECK EMAIL

        if(userRepository.existsByEmail(req.getEmail())){

            response.setMessage(
                    "Email already exists."
            );

            return response;
        }

        // CREATE USER

        User user = User.builder()

                .email(req.getEmail())

                .password(

                        passwordEncoder.encode(
                                req.getPassword()
                        )
                )

                .role(req.getRole())

                .build();

        // SAVE USER

        userRepository.save(user);

        response.setMessage(
                "Registration Successful."
        );

        return response;
    }

    // LOGIN USER

    public LoginResp login(LoginReq req){

        // AUTHENTICATE USER

        authenticationManager.authenticate(

                new UsernamePasswordAuthenticationToken(

                        req.getEmail(),

                        req.getPassword()
                )
        );

        // GET USER

        User user = userRepository

                .findByEmail(req.getEmail())

                .orElseThrow(
                        () -> new RuntimeException(
                                "User not found"
                        )
                );

        // GENERATE JWT TOKEN

        String token =
                jwtUtil.generateToken(user);

        // RETURN RESPONSE

        return LoginResp.builder()

                .token(token)

                .role(user.getRole().name())

                .userId(user.getId())

                .message("Login Successful")

                .build();
    }
}