package com.stackroute.pie.Repository;

import com.stackroute.pie.model.Insurer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InsurerRepository extends MongoRepository<Insurer,Long> {
    Optional<Insurer> findByInsurerLicense(String insurerLicense);
    Boolean existsByInsurerLicense(String insurerLicense);
    Boolean existsByInsurerEmail(String insurerEmail);
    Optional<Insurer> findByInsurerName(String insurerName);
    void deleteByInsurerName(String insurerName);
    void deleteByPoliciesPolicyId(long policyId);
    void deletePolicyByInsurerLicense(String insurerName);

}
