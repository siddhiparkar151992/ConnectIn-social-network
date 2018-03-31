start cmd /k "call mvn clean"
cd ./connectin-microservice
start cmd /k "call mvn clean spring-boot:run"

cd ./connectin-web
start cmd /k "call mvn clean spring-boot:run"