CREATE TABLE `account` (
  `id` varchar(16) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `type` varchar(12) DEFAULT 'employee',
  `active` varchar(12) DEFAULT 'active',
  `created_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(100) NOT NULL,
  `parent` int(11) DEFAULT '-1',
  PRIMARY KEY (`cat_id`)
);

CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_timestamp` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(11) DEFAULT NULL,
  `text` varchar(3000) DEFAULT NULL,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `industry` varchar(50) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `zipcode` int(11) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
);
CREATE TABLE `connections` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `user_id` int(255) DEFAULT NULL,
  `conn_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `edu_details` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `degree` varchar(50) DEFAULT NULL,
  `completion_dt` datetime DEFAULT NULL,
  `start_dt` datetime NOT NULL,
  `usr_prof_id` int(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `employment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comp_name` varchar(60) DEFAULT NULL,
  `start_dt` datetime NOT NULL,
  `end_dt` datetime DEFAULT NULL,
  `achievement_title` varchar(360) DEFAULT NULL,
  `achievement_desc` varchar(360) DEFAULT NULL,
  `prof_id` int(255) DEFAULT NULL,
  `type` varchar(12) DEFAULT 'Permanent',
  PRIMARY KEY (`id`)
);

CREATE TABLE `feeds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `feed_type` varchar(20) DEFAULT 'user',
  `user_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `image_db` (
  `url` varchar(255) DEFAULT NULL,
  `alt` varchar(50) DEFAULT NULL,
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL DEFAULT 'user',
  `post_id` int(255) DEFAULT NULL,
  `user_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`)
);
CREATE TABLE `likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `created_timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  `type` varchar(11) DEFAULT 'post',
  `post_id` int(11) DEFAULT NULL,
  `comment_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `owner_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id` (`user_id`),
  KEY `fk_category_id` (`category_id`),
  KEY `fk_feed_id` (`feed_id`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`cat_id`) ON DELETE CASCADE,
  CONSTRAINT `post_ibfk_3` FOREIGN KEY (`feed_id`) REFERENCES `feeds` (`id`) ON DELETE CASCADE
);
CREATE TABLE `profile` (
  `id` varchar(16) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_prof_dt_id` int(11) DEFAULT NULL,
  `usr_edu_dt_id` int(11) DEFAULT NULL,
  `prfimg` varchar(16) DEFAULT NULL,
  `cover_img` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) DEFAULT NULL,
  `image_urls` varchar(360) DEFAULT NULL,
  `start_dt` datetime DEFAULT NULL,
  `func` varchar(4000) DEFAULT NULL,
  `team_size` int(11) DEFAULT NULL,
  `emp_id` int(255) DEFAULT NULL,
  `end_dt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(150) NOT NULL,
  `lastName` varchar(150) NOT NULL,
  `email` varchar(320) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `birthdate` date NOT NULL,
  `user_name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);
CREATE TABLE `user_prof_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `current_company` varchar(60) DEFAULT NULL,
  `total_exp` int(11) DEFAULT '0',
  `addr` varchar(100) DEFAULT NULL,
  `prof_img` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `usr_auth` (
  `last_logged_in` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `password` varchar(355) DEFAULT NULL,
  `user_name` varchar(200) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
);