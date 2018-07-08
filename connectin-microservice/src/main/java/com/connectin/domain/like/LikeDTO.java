package com.connectin.domain.like;

import com.connectin.common.domain.ImageDTO;
import com.connectin.config.AppConfig;
import com.connectin.constants.ImageOwnerType;
import com.connectin.domain.user.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class LikeDTO {
    @Autowired
    private AppConfig appConfig;
    private int id;
    private UserDTO user;
    private String createdTime;
    private LikeType type;
    private DateFormat dateformat;

    public LikeDTO(int id, int userId, String firstName, String lastName,
                   String email, Date createdDate, LikeType type, String imageUrl, String imageAlt, ImageOwnerType imageOwnerType) {
        super();
        dateformat = new SimpleDateFormat("dd/MM/yyyy HH:MM:SS");
        this.id = id;
        this.type = type;
        this.user = new UserDTO(userId, firstName, lastName, email, new ImageDTO(imageUrl, imageAlt, imageOwnerType));
        this.createdTime = dateformat.format(createdDate);
    }

    public String getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(String createdTime) {
        this.createdTime = createdTime;
    }

    @Enumerated(EnumType.STRING)
    public LikeType getType() {
        return type;
    }

    @Enumerated(EnumType.STRING)
    public void setType(LikeType type) {
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public String getCreatedDate() {
        return createdTime;
    }

    public void setCreatedDate(String createdDate) {
        this.createdTime = createdDate;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((createdTime == null) ? 0 : createdTime.hashCode());
        result = prime * result + id;
        result = prime * result + ((user == null) ? 0 : user.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        LikeDTO other = (LikeDTO) obj;
        if (createdTime == null) {
            if (other.createdTime != null)
                return false;
        } else if (!createdTime.equals(other.createdTime))
            return false;
        if (id != other.id)
            return false;
        if (user == null) {
            if (other.user != null)
                return false;
        } else if (!user.equals(other.user))
            return false;
        return true;
    }


}
