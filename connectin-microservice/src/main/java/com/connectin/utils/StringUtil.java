package com.connectin.utils;

import org.springframework.stereotype.Component;

@Component
public class StringUtil implements TypeUtil{
	
	public boolean isBlank(String param){
		return param.isEmpty();
	}
	@Override
	public  boolean isvalid(String param){
		return !isNull(param) && !isEmpty(param);
	}
	@Override
	public  boolean hasLength (String param,int length){
		return param!=null || param.length() == length;
	}
	@Override
	public  boolean isNull (String param){
		return param==null;
	}
	@Override
	public  boolean isEmpty (String param){
		return  param.isEmpty();
	}
}
