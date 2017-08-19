package com.connectin.authenticate.entity;


import org.springframework.security.core.GrantedAuthority;

import java.util.List;

public class Role implements GrantedAuthority {
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    private String name;
    private List<Permission> Permissions;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Permission> getPermissions() {
        return Permissions;
    }

    public void setPermissions(List<Permission> permissions) {
        Permissions = permissions;
    }

    public String getAuthority() {
        // TODO Auto-generated method stub
        return name;
    }


}
