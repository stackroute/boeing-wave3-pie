package com.stackroute.pie.domain;

import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

@NodeEntity
public class disease {
    @Id
    @Relationship(type= "SUFFERING_FROM" ,direction=Relationship.INCOMING)

    private Long id;
    public String diseaseName;

    public disease(String diseaseName) {
        this.diseaseName = diseaseName;
    }

    public String getDiseaseName() {
        return diseaseName;
    }
}
