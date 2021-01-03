# syntax = docker/dockerfile:1.0-experimental
FROM maven:3-jdk-11-slim as builder
WORKDIR /app

COPY src src
COPY pom.xml .

RUN --mount=type=cache,target=/root/.m2 mvn clean package -Dmaven.test.skip=true -q -B

FROM openjdk:11-jre
WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

CMD java -jar app.jar