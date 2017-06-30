package com.connectin.business.security.encryption;

public interface Encryptor {
    public String encrypt(String field) throws Exception;

    public String decrypt(String field) throws Exception;
}
