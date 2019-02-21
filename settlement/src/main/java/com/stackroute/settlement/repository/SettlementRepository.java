package com.stackroute.settlement.repository;

import com.stackroute.settlement.domain.PendingTasks;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SettlementRepository extends MongoRepository<PendingTasks, Integer> {
    @Query
    public List<PendingTasks> findAllByInsurerName(String insurerName);

    @Query
    public PendingTasks findAllByInsuredName();
}
