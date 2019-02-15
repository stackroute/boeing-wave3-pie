FROM openjdk:11.0-oracle
ADD ./target/Insurer-0.0.1-SNAPSHOT.jar /usr/src/Insurer-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar","Insurer-0.0.1-SNAPSHOT.jar"]