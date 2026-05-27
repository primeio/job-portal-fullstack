package com.sushant.jobportal.service;

import com.sushant.jobportal.model.CustomUserDetails;
import com.sushant.jobportal.model.User;
import com.sushant.jobportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email).orElseThrow(()->
                new RuntimeException("User does not exist with username "+ email));

        return new CustomUserDetails(user);
    }
}
