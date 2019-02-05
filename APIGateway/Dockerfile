FROM openjdk:11.0-oracle
ADD ./target/APIGateway-0.0.1-SNAPSHOT.jar /usr/src/APIGateway-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar","APIGateway-0.0.1-SNAPSHOT.jar"]