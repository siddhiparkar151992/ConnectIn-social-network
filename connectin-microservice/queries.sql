create table connections(id int(255) primary key not null auto_increment,conn_id int(255) references user(id) user_id int(255) references user(id));
insert into user(firstName, lastName, email, gender, birthdate, user_name) values('gaurang', 'Raote','gaurang@gmail.com','m','1990-06-26', 'gra
ote_123');
insert into connections(user_id, conn_id) values(1,2);
insert into post(category_id, visibility, tags, user_id,feed_id, text) values(2, 'friends', 'trending,news,weekend',1, 1101, 'Weekend had fun with my lovelies');
insert into feeds(feedType) values('user_feed');

insert into category(cat_name, parent) values('feeds', null);
insert into category(cat_name, parent) values('recent', 1);
insert into category(cat_name, parent) values('news', 1);
insert into category(cat_name, parent) values('group', null);
insert into category(cat_name, parent) values('page', 4);

insert into image_db(url, alt, type,user_id) values('data/user/profile/12344.png','','user',1);
insert into user_prof_details(user_id, current_company, total_exp, addr, prof_img) values(1,'GE',2.5, 'dadar madhavwadi 102/A middle bungalow,
1st floor, room no 11', 1);

insert into project(title,image_urls,start_dt,func,team_size,emp_id) values('Operations Optimization','','2016-09-16','Reasearched and implemented various microservices from scratch on a cloud based project which would seggrgate and provide assets data from timeseries datasources. Implemented various algorithms in order to formulate optimal solutions to real world problems which resulted in reduction in time to significant extant. Design, research and development of Push mechanism from server using RabbitMQ and Redis with a high performance architecture to store and retrieve assets reducing the time',20,1);
insert into project(title,image_urls,start_dt,func,team_size,emp_id) values('Operations V 2.0','','2017-02-16','Reasearched and implemented various microservices from scratch on a cloud based project which would seggrgate and provide assets data from timeseries datasources. Implemented various algorithms in order to formulate optimal solutions to real world problems which resulted in reduction in time to significant extant. Design, research and development of Push mechanism from server using RabbitMQ and Redis with a high performance architecture to store and retrieve assets reducing the time',20,1);

insert into edu_details(degree,completion_dt,start_dt,usr_prof_id) values('Bachelors of technology','2014-07-20','2017-07-20', 1);
insert into employment(comp_name,start_dt, achievement_title, achievement_desc, prof_id) values('General electric', '2016-09-16', 'Best performer', 'Won an award fo delivering results in an uncertain world. Shown dedication toward achieveing customer satisfaction and best deliverables.', 1);
insert into employment(comp_name,start_dt, achievement_title, achievement_desc, prof_id) values('General electric', '2016-09-16', 'Best performer', 'Won an award fo delivering results in an uncertain world. Shown dedication toward achieveing customer satisfaction and best deliverables.', 1);
 alter table category modify column parent int default -1;