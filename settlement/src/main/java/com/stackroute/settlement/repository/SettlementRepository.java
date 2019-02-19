package com.stackroute.settlement.repository;

import com.stackroute.settlement.domain.PendingTasks;
import com.stackroute.settlement.domain.Tasks;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SettlementRepository extends MongoRepository<PendingTasks, Integer> {
}
