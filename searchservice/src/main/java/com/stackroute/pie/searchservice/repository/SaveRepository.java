package com.stackroute.pie.searchservice.repository;

import com.stackroute.pie.searchservice.domain.SearchPDM;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SaveRepository extends MongoRepository<SearchPDM, String> {
}
