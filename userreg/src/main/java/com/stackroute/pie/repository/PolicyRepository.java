package com.stackroute.pie.repository;

import com.stackroute.pie.domain.Policy;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PolicyRepository extends MongoRepository<Policy,Integer> {



}
