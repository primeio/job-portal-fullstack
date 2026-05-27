package com.sushant.jobportal.dto;

import com.sushant.jobportal.model.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterReq {

    @Email(message = "Enter valid email")
    private String email;

   @NotBlank(message = "must enter password")
    private String password;

   private Role role;
}
