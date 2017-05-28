package com.connectin.security.encypt;

public interface Encryptor {
	public String encrypt(String field) throws Exception;
	public String decrypt(String field) throws Exception;
}
