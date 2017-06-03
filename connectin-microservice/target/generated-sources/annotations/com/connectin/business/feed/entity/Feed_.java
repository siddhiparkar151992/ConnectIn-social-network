package com.connectin.business.feed.entity;

import com.connectin.domain.feed.FeedType;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Feed.class)
public abstract class Feed_ {

	public static volatile SingularAttribute<Feed, Integer> id;
	public static volatile SingularAttribute<Feed, Date> updatedDate;
	public static volatile SingularAttribute<Feed, FeedType> feedType;
	public static volatile SingularAttribute<Feed, Date> createdDate;

}

