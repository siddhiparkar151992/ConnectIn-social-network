insert into post(category_id, visibility, tags, user_id,feed_id, text) values(2, 'friends', 'trending,news,weekend',1, 1101, 'Weekend had fun with my lovelies');
insert into feeds(feedType) values('user_feed');

insert into category(cat_name, parent) values('feeds', null);
insert into category(cat_name, parent) values('recent', 1);
insert into category(cat_name, parent) values('news', 1);
insert into category(cat_name, parent) values('group', null);
insert into category(cat_name, parent) values('page', 4);


 alter table category modify column parent int default -1;