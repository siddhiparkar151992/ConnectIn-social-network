package com.connectin.business.user.connections.entity;

import com.connectin.business.user.entity.User;

import java.io.Serializable;


@Entity
@Table(name = "connections")
public class Connection implements Serializable {
    @Id
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "conn_id")
    private User connection;

    public User getConnection() {
        return connection;
    }

    public void setConnection(User connection) {
        this.connection = connection;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
