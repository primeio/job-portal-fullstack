package com.sushant.jobportal.service;

import com.sushant.jobportal.dto.PostRequest;
import com.sushant.jobportal.dto.PostResponse;
import com.sushant.jobportal.dto.ResponseDto;
import com.sushant.jobportal.exception.ResourceNotFoundException;
import com.sushant.jobportal.exception.UsernameNotFoundException;
import com.sushant.jobportal.model.Post;
import com.sushant.jobportal.model.User;
import com.sushant.jobportal.repository.PostRepository;
import com.sushant.jobportal.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    private final UserRepository userRepository;

    // CREATE POST

    public ResponseDto createPost(

            PostRequest postDto,

            Long userId
    ){

        User user = userRepository.findById(userId)

                .orElseThrow(() ->

                        new UsernameNotFoundException(

                                "username Not found"
                        )
                );

        Post post = Post.builder()

                .title(postDto.getTitle())

                .companyName(postDto.getCompanyName())

                .description(postDto.getDescription())

                .experience(postDto.getExperience())

                .jobType(postDto.getJobType())

                .location(postDto.getLocation())

                .salary(postDto.getSalary())

                .user(user)

                .build();

        postRepository.save(post);

        ResponseDto responseDto =
                new ResponseDto();

        responseDto.setMessage(

                "Post created successfully."
        );

        return responseDto;
    }

    // RECRUITER POSTS

    public List<PostResponse>
    getAllPost(Long userId){

        List<Post> posts =

                postRepository.findByUserId(userId);

        return posts.stream().map(post ->

                PostResponse.builder()

                        .id(post.getId())

                        .title(post.getTitle())

                        .companyName(
                                post.getCompanyName()
                        )

                        .description(
                                post.getDescription()
                        )

                        .experience(
                                post.getExperience()
                        )

                        .jobType(
                                post.getJobType()
                        )

                        .location(
                                post.getLocation()
                        )

                        .salary(
                                post.getSalary()
                        )

                        .build()

        ).toList();
    }

    // SINGLE POST

    public PostResponse getPost(Long id){

        Post post = postRepository.findById(id)

                .orElseThrow(() ->

                        new ResourceNotFoundException(

                                "Post not exists with id "
                                        + id
                        )
                );

        return PostResponse.builder()

                .id(post.getId())

                .title(post.getTitle())

                .companyName(
                        post.getCompanyName()
                )

                .description(
                        post.getDescription()
                )

                .experience(
                        post.getExperience()
                )

                .jobType(
                        post.getJobType()
                )

                .location(
                        post.getLocation()
                )

                .salary(
                        post.getSalary()
                )

                .build();
    }

    // ALL JOBS FOR CANDIDATE

    public List<PostResponse>
    getAllRecruiterPost(){

        List<Post> posts =
                postRepository.findAll();

        return posts.stream().map(post ->

                PostResponse.builder()

                        .id(post.getId())

                        .title(post.getTitle())

                        .companyName(
                                post.getCompanyName()
                        )

                        .description(
                                post.getDescription()
                        )

                        .experience(
                                post.getExperience()
                        )

                        .jobType(
                                post.getJobType()
                        )

                        .location(
                                post.getLocation()
                        )

                        .salary(
                                post.getSalary()
                        )

                        .build()

        ).toList();
    }
}