package com.sushant.jobportal.service;

import com.sushant.jobportal.dto.ApplicationReq;
import com.sushant.jobportal.dto.ApplicationResponse;
import com.sushant.jobportal.dto.ResponseDto;
import com.sushant.jobportal.exception.ResourceNotFoundException;
import com.sushant.jobportal.exception.UsernameNotFoundException;
import com.sushant.jobportal.model.Application;
import com.sushant.jobportal.model.Post;
import com.sushant.jobportal.model.Status;
import com.sushant.jobportal.model.User;
import com.sushant.jobportal.repository.ApplicationRepository;
import com.sushant.jobportal.repository.PostRepository;
import com.sushant.jobportal.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicationService {

    private final ApplicationRepository applicationRepository;

    private final UserRepository userRepository;

    private final PostRepository postRepository;

    // APPLY JOB

    public ResponseDto apply(

            Long userId,

            Long postId,

            ApplicationReq req
    ){

        User user = userRepository.findById(userId)

                .orElseThrow(() ->

                        new UsernameNotFoundException(

                                "User not found."
                        )
                );

        Post post = postRepository.findById(postId)

                .orElseThrow(() ->

                        new ResourceNotFoundException(

                                "Post not found"
                        )
                );

        Application application = Application.builder()

                .appliedAt(LocalDateTime.now())

                .jobType(req.getJobType())

                .user(user)

                .post(post)

                .status(Status.APPLIED)

                .build();

        applicationRepository.save(application);

        ResponseDto responseDto =
                new ResponseDto();

        responseDto.setMessage(
                "Applied successfully"
        );

        return responseDto;
    }

    // GET USER APPLICATIONS

    public List<ApplicationResponse>
    getAll(Long userId){

        List<Application> applications =

                applicationRepository
                        .findByUserId(userId);

        return applications.stream()

                .map(application ->

                        ApplicationResponse.builder()

                                .id(
                                        application.getId()
                                )

                                .appliedAt(
                                        application.getAppliedAt()
                                )

                                .status(
                                        application.getStatus()
                                )

                                .jobType(
                                        application.getJobType()
                                )

                                // USER

                                .userId(
                                        application
                                                .getUser()
                                                .getId()
                                )

                                .candidateEmail(
                                        application
                                                .getUser()
                                                .getEmail()
                                )

                                // POST

                                .postId(
                                        application
                                                .getPost()
                                                .getId()
                                )

                                .title(
                                        application
                                                .getPost()
                                                .getTitle()
                                )

                                .companyName(
                                        application
                                                .getPost()
                                                .getCompanyName()
                                )

                                .build()

                ).toList();
    }

    // GET SINGLE APPLICATION

    public ApplicationResponse
    getApplication(Long id){

        Application application =

                applicationRepository
                        .findById(id)

                        .orElseThrow(() ->

                                new ResourceNotFoundException(

                                        "Application not exist with id "

                                                + id
                                )
                        );

        return ApplicationResponse.builder()

                .id(
                        application.getId()
                )

                .appliedAt(
                        application.getAppliedAt()
                )

                .status(
                        application.getStatus()
                )

                .jobType(
                        application.getJobType()
                )

                // USER

                .userId(
                        application
                                .getUser()
                                .getId()
                )

                .candidateEmail(
                        application
                                .getUser()
                                .getEmail()
                )

                // POST

                .postId(
                        application
                                .getPost()
                                .getId()
                )

                .title(
                        application
                                .getPost()
                                .getTitle()
                )

                .companyName(
                        application
                                .getPost()
                                .getCompanyName()
                )

                .build();
    }

    // GET APPLICATIONS BY POST

    public List<ApplicationResponse>
    getApplicationsByPost(Long postId){

        List<Application> applications =

                applicationRepository
                        .findByPostId(postId);

        return applications.stream()

                .map(application ->

                        ApplicationResponse.builder()

                                .id(
                                        application.getId()
                                )

                                .appliedAt(
                                        application.getAppliedAt()
                                )

                                .status(
                                        application.getStatus()
                                )

                                .jobType(
                                        application.getJobType()
                                )

                                // USER

                                .userId(
                                        application
                                                .getUser()
                                                .getId()
                                )

                                .candidateEmail(
                                        application
                                                .getUser()
                                                .getEmail()
                                )

                                // POST

                                .postId(
                                        application
                                                .getPost()
                                                .getId()
                                )

                                .title(
                                        application
                                                .getPost()
                                                .getTitle()
                                )

                                .companyName(
                                        application
                                                .getPost()
                                                .getCompanyName()
                                )

                                .build()

                ).toList();
    }

    // UPDATE STATUS

    public ResponseDto updateStatus(

            Long applicationId,

            Status status
    ){

        Application application =

                applicationRepository
                        .findById(applicationId)

                        .orElseThrow(() ->

                                new ResourceNotFoundException(

                                        "Application not found with id "

                                                + applicationId
                                )
                        );

        application.setStatus(status);

        applicationRepository.save(application);

        ResponseDto responseDto =
                new ResponseDto();

        responseDto.setMessage(

                "Application status updated successfully."
        );

        return responseDto;
    }
}