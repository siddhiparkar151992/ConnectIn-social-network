create table User (
id int primary key AUTO_INCREMENT,
firstName varchar(150) not null, 
lastName varchar(150) not null,
email varchar(320) not null unique,
password varchar(150) not null,
username varchar(150) unique,
gender varchar(1) not null check (gender in ('M', 'F')),
birthdate date not null,
pictureSet boolean default false
);

create table usr_auth(
	id int primary key auto_increment,
	user_id int references User(username),
	password varchar(16),
	last_logged_in datetime

);                          
create table image_db(
	id varchar(16) primary key,
	url varchar(16) not null unique,
	alt varchar(50)
);

CREATE TABLE Category(
	cat_id int NOT NULL AUTO_INCREMENT,
	cat_name VARCHAR(100) NOT NULL,
	parent INT,
	PRIMARY KEY (cat_id)
);
CREATE TABLE `post` (
  `visibility` varchar(12) DEFAULT 'public',
  `tags` varchar(300) DEFAULT NULL,
  `created_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  
  `category_id` int(11) DEFAULT NULL,
  `feed_id` int(11) DEFAULT NULL,
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `text` varchar(3000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id` (`user_id`),
  KEY `fk_category_id` (`category_id`),
  KEY `fk_feed_id` (`feed_id`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`cat_id`) ON DELETE CASCADE,
  CONSTRAINT `post_ibfk_3` FOREIGN KEY (`feed_id`) REFERENCES `feeds` (`id`) ON DELETE CASCADE
) 

create table comments(
id int primary key auto_increment,
post_id int not null references post(id),
text varchar(3000) not null,
created_timestamp datetime default current_timestamp, 
likes varhcar(3000),
updated_timestamp datetime default current_timestamp on update current_timestamp,
user_id int references user(id));

create table likes(id int primary key auto_increment not null,
user_id int references user(id), 
created_timestamp datetime default current_timestamp);


create table employment(
	id int primary key AUTO_INCREMENT,
	comp_name varchar(60),
	proj_id int references Project(id),
	start_dt datetime not null,
	end_dt datetime not null,
	achievement_title varchar(360),
	achievement_desc varchar(360)

);

create table Company(
	id int auto_increment primary key,
	name varchar(100),
	industry varchar(50),
	city varchar(20),
	state varchar(20),
	country varchar(20),
	zipcode int,
	description text
);
create table Project(
	id int primary key auto_increment,
	title varchar(60),
	image_urls varchar(360),
	start_dt datetime,
	func varchar(360),
	team_size int
);


create table User_prof_detalis(
	id int primary key AUTO_INCREMENT,
	user_id int references User(id),
	current_company varchar(60) references work_history(id),
	pre_companies varchar(360),
	total_exp int default 0

);

create table Usr_edu_dt(
	id int primary key auto_increment,
	entity_name varchar(200) not null,
	entity_type varchar(16) not null,
	field varchar(60),
	grade varchar(1)

);
create table profile(
	id varchar(16) primary key,
	user_id int references User(id),
	user_prof_dt_id int references User_prof_detalis(id),
	usr_edu_dt_id int references Usr_edu_dt(id),
	prfimg varchar(16) references image_urls(id),
	cover_img varchar(16) references image_urls(id)
);

create table feeds(
	id bigint primary key not null,
	createdDate datetime,
	updatedDate datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    feedType varchar(20) not null
    
	
);

create table account(
	id varchar(16) primary key,
	user_id int references User(id),
	type varchar(12) default 'employee' check(type in ('employer','company','group','community')),
	active varchar(12) default 'active' check(active in (1,0,-1,2))
);