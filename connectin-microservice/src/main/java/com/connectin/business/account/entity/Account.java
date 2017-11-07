package com.connectin.business.account.entity;

import com.connectin.common.domain.AccountAvailibility;
import com.connectin.domain.account.AccountType;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Entity
@Table(name = "account")
public class Account implements Serializable {
    @Id
    @Column(name = "id", columnDefinition = "varhcar(16)")
    private String id;

    @Column(name = "user_id", columnDefinition = "int(11)")
    private int userid;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", columnDefinition = "varchar(12)")
    private AccountType accountType;

    @Enumerated(EnumType.STRING)
    @Column(name = "active", columnDefinition = "varchar(12)")
    private AccountAvailibility accountAvailibility;

    @Column(name = "created_dt")
    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    private Date createdDate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    @Enumerated(EnumType.STRING)
    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    @Enumerated(EnumType.STRING)
    public AccountAvailibility getAccountAvailibility() {
        return accountAvailibility;
    }

    public void setAccountAvailibility(AccountAvailibility accountAvailibility) {
        this.accountAvailibility = accountAvailibility;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }


}
