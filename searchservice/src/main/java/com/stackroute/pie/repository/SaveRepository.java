package com.stackroute.pie.repository;

import com.stackroute.pie.domain.SearchPDM;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SaveRepository extends MongoRepository<SearchPDM, String> {
}
