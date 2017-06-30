package com.connectin.business.generic.dao;

import java.util.List;


public interface GenericDao<T> {

    public T getById(String id);

    public void update(T t);

    public void delete(String id);

    public void delete(int id);

    public List<T> getAll();

    public List<T> filter(String id);

    public List<T> filter(int id);

    public T getById(int id);


}
