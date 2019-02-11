package com.stackroute.pie.recommendation.domain;

import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

@NodeEntity
public class disease {
    @Id
    @Relationship(type= "SUFFERING_FROM" ,direction=Relationship.INCOMING)

    public String diseaseName;




    public disease(String diseaseName) {
        this.diseaseName = diseaseName;
    }

    public String getDiseaseName() {
        return diseaseName;
    }
}
