#FROM openjdk:11.0-oracle
#ADD ./target/pie-0.0.1-SNAPSHOT.jar /usr/src/pie-0.0.1-SNAPSHOT.jar
#WORKDIR usr/src
#ENTRYPOINT ["java","-jar","pie-0.0.1-SNAPSHOT.jar"]

FROM openjdk:11
ADD ./target/recommendation-0.0.1-SNAPSHOT.jar /event/src/recommendation-0.0.1-SNAPSHOT.jar
EXPOSE 8055
WORKDIR event/src
ENTRYPOINT ["java","-jar","recommendation-0.0.1-SNAPSHOT.jar"]







