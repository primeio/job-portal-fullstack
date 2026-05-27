package com.sushant.jobportal.service;

import com.sushant.jobportal.dto.ProfileRequest;
import com.sushant.jobportal.dto.ProfileResponse;
import com.sushant.jobportal.dto.ResponseDto;
import com.sushant.jobportal.exception.ResourceNotFoundException;
import com.sushant.jobportal.model.Profile;
import com.sushant.jobportal.model.Role;
import com.sushant.jobportal.model.User;
import com.sushant.jobportal.repository.ProfileRepository;
import com.sushant.jobportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@RequiredArgsConstructor
public class ProfileService {

    private final ProfileRepository profileRepository;
    private final UserRepository userRepository;


    public ProfileResponse addDetails(ProfileRequest req,Long userId){

        User user = userRepository.findById(userId).orElseThrow(()->
                new ResourceNotFoundException("User not found with id "+ userId));

        Profile profile = Profile.builder()
                .user(user)
                .fullName(req.getFullName())
                .education(req.getEducation())
                .phone(req.getPhone())
                .experience(req.getExperience())
                .location(req.getLocation())
                .skills(req.getSkills())
                .build();

        profileRepository.save(profile);

         return ProfileResponse.builder()
                 .id(profile.getId())
                 .email(profile.getUser().getEmail())
                 .fullName(profile.getFullName())
                 .education(profile.getEducation())
                 .phone(profile.getPhone())
                 .experience(profile.getExperience())
                 .resumeUrl(profile.getResumeUrl())
                 .skills(profile.getSkills())
                 .location(profile.getLocation())
                 .build();
    }

    public ResponseDto uploadResume(MultipartFile file
    ,Long userId) throws IOException{

        User user = userRepository.findById(userId)
                .orElseThrow(()->new ResourceNotFoundException("User not found with id "+ userId));

        Profile profile = profileRepository.findByUserId(userId).orElseThrow(()->
                new ResourceNotFoundException("profile not found with id +"+ userId));

        String fileName = System.currentTimeMillis()+"_"+file.getOriginalFilename();

        Path path = Paths.get("uploads/resume"+fileName);

        Files.createDirectories(path.getParent());

        Files.write(path,file.getBytes());

        profile.setResumeUrl(fileName);

        profileRepository.save(profile);

        ResponseDto responseDto = new ResponseDto();

        responseDto.setMessage("Resume uploaded successfully.");

        return responseDto;

    }

    public ProfileResponse getProfile(long userId){
        Profile profile = profileRepository.findByUserId(userId).
                orElseThrow(()->new ResourceNotFoundException(
                "Profile not found with userId "+ userId
        ));

        User user = profile.getUser();


             ProfileResponse.ProfileResponseBuilder  response =  ProfileResponse.builder()
                .email(profile.getUser().getEmail())
                .fullName(profile.getFullName())

                .phone(profile.getPhone());




        if (user.getRole()== Role.CANDIDATE ){
           response.education(profile.getEducation())
                   .experience(profile.getExperience())
                   .resumeUrl(profile.getResumeUrl())
                   .skills(profile.getSkills())
                   .location(profile.getLocation());
        }
        if (user.getRole() == Role.RECRUITER){
            response.companyName(profile.getCompanyName())
                    .designation(profile.getDesignation())
                    .companyWebsite(profile.getCompanyWebsite());
        }
        return response.build();
    }
}
