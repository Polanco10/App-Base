# Se hace el mvn install - se compila
FROM maven:3.8.6-openjdk-18 AS build
WORKDIR /usr/src/app
COPY . ./
RUN mvn clean package

# Se copiam los jar y se ejecutan
FROM openjdk:18
ARG JAR_NAME="demo-0.0.1-SNAPSHOT"
WORKDIR /usr/src/app
EXPOSE 8080
COPY --from=build /usr/src/app/target/demo-0.0.1-SNAPSHOT.jar ./demo.jar
CMD ["java","-jar", "./demo.jar"]