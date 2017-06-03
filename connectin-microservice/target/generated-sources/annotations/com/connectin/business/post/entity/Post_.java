package com.connectin.business.post.entity;

import com.connectin.business.feed.entity.Feed;
import com.connectin.business.user.entity.User;
import com.connectin.common.entity.Category;
import com.connectin.constants.Visibility;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Post.class)
public abstract class Post_ {

	public static volatile SingularAttribute<Post, String> tags;
	public static volatile SingularAttribute<Post, Integer> id;
	public static volatile SingularAttribute<Post, Feed> feedId;
	public static volatile SingularAttribute<Post, String> text;
	public static volatile SingularAttribute<Post, Date> createdTime;
	public static volatile SingularAttribute<Post, Visibility> visibility;
	public static volatile SingularAttribute<Post, Category> categoryId;
	public static volatile SingularAttribute<Post, User> userId;
	public static volatile SingularAttribute<Post, Date> updatedTime;

}

