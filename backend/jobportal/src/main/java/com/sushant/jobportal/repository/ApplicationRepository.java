package com.sushant.jobportal.repository;

import com.sushant.jobportal.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepository extends JpaRepository<Application,Long> {
    List<Application> findByUserId(Long userId);
    List<Application> findByPostId(Long postId);

}
