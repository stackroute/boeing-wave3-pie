package com.stackroute.pie.repository;

import com.stackroute.pie.model.Insurer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InsurerRepository extends JpaRepository<Insurer,Long> {
    Optional<Insurer> findByInsurerName(String insurerName);
    Boolean existsByInsurerName(String insurerName);
    Boolean existsByInsurerEmail(String insurerEmail);
}
