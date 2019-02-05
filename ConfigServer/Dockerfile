FROM openjdk:11.0-oracle
ADD ./build/libs/ConfigServer-0.0.1-SNAPSHOT.jar /usr/src/ConfigServer-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar","ConfigServer-0.0.1-SNAPSHOT.jar"]
