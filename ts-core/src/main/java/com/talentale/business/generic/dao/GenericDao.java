package com.talentale.business.generic.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.data.jpa.repository.Query;


public interface GenericDao<T> {
	
	public  T getById(String id);
	public  void update(T t);
	public  void delete(String id);
	public  void delete(int id);
	public List<T> getAll();
	public List<T> filter(String id);
	public List<T> filter(int id);
	public T getById(int id);
	
	
}
