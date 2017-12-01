package com.connectin.security.encypt;

import org.springframework.stereotype.Component;

@Component
public interface Encryptor {
    public String encrypt(String field) throws Exception;

    public String decrypt(String field) throws Exception;
}
