package com.sushant.jobportal.config;

import com.sushant.jobportal.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret;

    private SecretKey getKey() {

        return Keys.hmacShaKeyFor(secret.getBytes());
    }

    // GENERATE JWT TOKEN

    public String generateToken(User user){

        return Jwts.builder()

                // EMAIL

                .subject(user.getEmail())

                // CUSTOM CLAIMS

                .claim("role", user.getRole().name())

                .claim("userId", user.getId())

                // TOKEN TIME

                .issuedAt(new Date())

                .expiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 1000 * 60 * 10
                        )
                )

                // SIGN

                .signWith(
                        getKey(),
                        SignatureAlgorithm.HS256
                )

                .compact();
    }

    // GET ALL CLAIMS

    public Claims getClaims(String token){

        return Jwts.parser()

                .verifyWith(getKey())

                .build()

                .parseSignedClaims(token)

                .getPayload();
    }

    // EXTRACT EMAIL

    public String extractUsername(String token){

        return getClaims(token)
                .getSubject();
    }

    // EXTRACT ROLE

    public String extractRole(String token){

        return getClaims(token)
                .get("role", String.class);
    }

    // EXTRACT USER ID

    public Long extractUserId(String token){

        return getClaims(token)
                .get("userId", Long.class);
    }

    // CHECK TOKEN EXPIRATION

    public boolean isTokenExpired(String token){

        return getClaims(token)
                .getExpiration()
                .before(new Date());
    }

    // VALIDATE TOKEN

    public boolean validateToken(
            String username,
            UserDetails userDetails,
            String token
    ){

        return username.equals(
                userDetails.getUsername()
        )

                &&

                !isTokenExpired(token);
    }
}