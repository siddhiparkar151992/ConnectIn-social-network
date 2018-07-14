# Connectin A Social network for anyone and everyone

## A Social network application form users who wish to enlarge their social life with friends connected throughout the world

## Technology Stack
Includes interdependent maven projects to package it into one Connectin Spring boot project. Following application will provide user to create or manage account for social network ConnectIn. A comprehensive project which constitues of latest technologies like spring-boot , Angular 2 and BootStrap. A responsive UI along with user friendly views and functions on views.

## Application 
* Application Architecture
	For modularity web services have been packaged in connectin-microservice package which focuses on Sr principle of handling RestAPI and transactions with database.
	UI code has been seperated into another project names connectin-web which focuses on login and other view rendring with security.
	Authentication has been a part of connectin-auth of whcih sole purpose is Two way authentication to UI and RestAPI's.

* Security
	For security pusrpose authentication has been added using spring security.
	The application manages security of users with statelessness and two way token generation using JWt token based authentication.

* Modularity
    The code has been following with strict guidelines and naming conventions according to airbnb


## Running Connectin locally
Run.bat file will automatically run all dependent modules like service and webapp and start server at http://localhost:9092
1. Go to root project 
2. double click on run.bat or open cmd and type run.bat

## Database configuration

In its default configuration, Connectin uses an MySQL database and Redis for caching to some extent.
gets populated at startup with data. A similar setup is provided for MySql in case a persistent database configuration is needed.
Note that whenever the database type is changed, the application.properties file needs to be updated and the mysql-connector-java artifact from the pom.xml needs to be uncommented.

for creating database configrations run database.sql file at root folder

pleas run sql commands for creating table using below steps:
1. go to /sql folder in root project
2. open create.sql 
3. execute all commands from create.sql
4. open insert.sql in same folder and execute insert commands

## Working with ConnectIn in Eclipse/STS

### prerequisites
The following items should be installed in your system:
* Maven 3 (http://www.sonatype.com/books/mvnref-book/reference/installation.html)
* git command line tool (https://help.github.com/articles/set-up-git)
* Eclipse with the m2e plugin (m2e is installed by default when using the STS (http://www.springsource.org/sts) distribution of Eclipse)

Note: when m2e is available, there is an m2 icon in Help -> About dialog.
If m2e is not there, just follow the install process here: http://eclipse.org/m2e/download/


### Steps:
Inside Eclipse
```
File -> Import -> Maven -> Existing Maven project
```

### Screenshots
# Home Page
![ScreenShot](https://raw.github.com/siddhiparkar151992/connectin/master/screenshots/homepage.png)

# Profile page
![ScreenShot](https://raw.github.com/siddhiparkar151992/connectin/master/screenshots/profile-page.png)

# notifications
![ScreenShot](https://raw.github.com/siddhiparkar151992/connectin/master/screenshots/notification.png)

# Friend List
![ScreenShot](https://raw.github.com/siddhiparkar151992/connectin/master/screenshots/friend-list.png)
