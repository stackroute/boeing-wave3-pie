package com.stackroute.pie.repository;

import com.stackroute.pie.domain.Insurer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ExternalDbRepository extends MongoRepository<Insurer,Long> {


      void deleteByInsurerName(String insurerName);
      Optional<Insurer> findByInsurerName(String insurerName);


}
