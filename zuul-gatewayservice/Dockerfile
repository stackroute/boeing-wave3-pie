FROM openjdk:11

ADD ./target/zuul-gatewayservice-0.0.3-SNAPSHOT.jar /event/src/zuul-gatewayservice-0.0.3-SNAPSHOT.jar
EXPOSE 8092
RUN ls
ADD keystore.p12 /event/src
RUN ls
WORKDIR event/src
RUN ls
ENTRYPOINT ["java","-jar","zuul-gatewayservice-0.0.3-SNAPSHOT.jar"]
