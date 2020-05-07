package com.nagarro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.nagarro.entities.BusinessUnits;


@Repository
@RepositoryRestResource(collectionResourceRel="BusinessUnits", path="businessUnits")
public interface BusinessUnitRepository extends JpaRepository<BusinessUnits, Long> {

}
