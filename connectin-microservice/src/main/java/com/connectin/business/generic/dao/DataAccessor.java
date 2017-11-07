package com.connectin.business.generic.dao;

import com.connectin.exceptions.ConnectinBaseException;

import java.util.List;


public abstract class DataAccessor<T> {

    public abstract T getById(String id) throws ConnectinBaseException;

    public abstract void update(T t) throws ConnectinBaseException;

    public abstract void delete(String id) throws ConnectinBaseException;

    public abstract void delete(int id) throws ConnectinBaseException;

    public abstract List<T> getAll() throws ConnectinBaseException;

    public abstract List<T> filter(String id) throws ConnectinBaseException;

    public abstract List<T> filter(int id) throws ConnectinBaseException;

    public abstract T getById(int id) throws ConnectinBaseException;


}
