package com.connectin.utils;

import org.springframework.stereotype.Component;

@Component
public class ObjectUtil {
	public<T>  boolean isvalidObject(Object obj,Class<T> type){
		return obj!=null;
		
	}
	
	public  boolean isNull(Object obj){
		return obj==null;
	}
}
