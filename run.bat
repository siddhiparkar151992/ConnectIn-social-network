start cmd /k "call mvn clean"

start cmd /k "cd connectin-microservice & call mvn clean spring-boot:run"


start cmd /k "cd connectin-web & call mvn clean spring-boot:run"


start cmd /k "cd connectin-web & npm install & grunt"