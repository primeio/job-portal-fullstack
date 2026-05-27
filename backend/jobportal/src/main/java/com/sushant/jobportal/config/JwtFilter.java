package com.sushant.jobportal.config;

import com.sushant.jobportal.service.CustomUserDetailsService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    private final CustomUserDetailsService customUserDetailsService;

    private final HandlerExceptionResolver handlerExceptionResolver;

    @Override
    protected void doFilterInternal(

            HttpServletRequest request,

            HttpServletResponse response,

            FilterChain filterChain

    ) throws ServletException, IOException {

        try {

            // GET AUTH HEADER

            String authHeader =
                    request.getHeader("Authorization");

            String token = null;

            String username = null;

            // CHECK HEADER

            if (
                    authHeader != null
                            &&
                            authHeader.startsWith("Bearer ")
            ) {

                token = authHeader.substring(7);

                username =
                        jwtUtil.extractUsername(token);
            }

            // IF USERNAME EXISTS
            // AND USER NOT AUTHENTICATED

            if (
                    username != null
                            &&
                            SecurityContextHolder
                                    .getContext()
                                    .getAuthentication() == null
            ) {

                // LOAD USER

                UserDetails userDetails =
                        customUserDetailsService
                                .loadUserByUsername(username);

                // VALIDATE TOKEN

                if (
                        jwtUtil.validateToken(
                                username,
                                userDetails,
                                token
                        )
                ) {

                    UsernamePasswordAuthenticationToken authToken =
                            new UsernamePasswordAuthenticationToken(

                                    userDetails,

                                    null,

                                    userDetails.getAuthorities()
                            );

                    authToken.setDetails(

                            new WebAuthenticationDetailsSource()
                                    .buildDetails(request)
                    );

                    // SET AUTHENTICATION

                    SecurityContextHolder
                            .getContext()
                            .setAuthentication(authToken);

                    // DEBUG

                    System.out.println(
                            "JWT FILTER EXECUTED"
                    );

                    System.out.println(
                            "USERNAME : "
                                    + jwtUtil.extractUsername(token)
                    );

                    System.out.println(
                            "ROLE : "
                                    + jwtUtil.extractRole(token)
                    );

                    System.out.println(
                            "USER ID : "
                                    + jwtUtil.extractUserId(token)
                    );
                }
            }

            // CONTINUE FILTER

            filterChain.doFilter(request, response);

        }

        catch (Exception e) {

            handlerExceptionResolver
                    .resolveException(
                            request,
                            response,
                            null,
                            e
                    );
        }
    }
}