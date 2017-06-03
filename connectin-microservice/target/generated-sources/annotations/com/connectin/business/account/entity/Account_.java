package com.connectin.business.account.entity;

import com.connectin.common.domain.AccountAvailibility;
import com.connectin.domain.account.AccountType;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Account.class)
public abstract class Account_ {

	public static volatile SingularAttribute<Account, AccountAvailibility> accountAvailibility;
	public static volatile SingularAttribute<Account, String> id;
	public static volatile SingularAttribute<Account, AccountType> accountType;
	public static volatile SingularAttribute<Account, Integer> userid;
	public static volatile SingularAttribute<Account, Date> createdDate;

}

