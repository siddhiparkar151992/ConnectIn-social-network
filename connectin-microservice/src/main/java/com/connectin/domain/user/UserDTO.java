package com.connectin.domain.user;

import com.connectin.common.domain.ImageDTO;
import com.connectin.constants.Gender;

import java.io.Serializable;
import java.util.Date;

@SuppressWarnings("serial")
public class UserDTO implements Serializable {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private Gender gender;
    private Date date;
    private ImageDTO image;
    public UserDTO(int id, String firstName, String lastName, String email, ImageDTO images) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.image = images;
    }

    public UserDTO() {
    }

    public UserDTO(int id) {
        this.id = id;
    }

    public UserDTO(int id, String firstName, String lastName, String email) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    /**
     * @param gender
     * @param lastName
     * @param date
     * @param id
     * @param images
     * @param firstName
     * @param email
     */
    public UserDTO(Gender gender, String lastName, Date date, int id, ImageDTO images, String firstName, String email) {
        super();
        this.gender = gender;
        this.lastName = lastName;
        this.date = date;
        this.id = id;
        this.image = images;
        this.firstName = firstName;
        this.email = email;
    }

    /**
     * @return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return the firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param firstName the firstName to set
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * @return the lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName the lastName to set
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return the gender
     */
    public Gender getGender() {
        return gender;
    }

    /**
     * @param gender the gender to set
     */
    public void setGender(Gender gender) {
        this.gender = gender;
    }

    /**
     * @return the date
     */
    public Date getDate() {
        return date;
    }

    /**
     * @param date the date to set
     */
    public void setDate(Date date) {
        this.date = date;
    }

    /**
     * @return the images
     */
    public ImageDTO getImages() {
        return image;
    }

    /**
     * @param images the images to set
     */
    public void setImages(ImageDTO images) {
        this.image = images;
    }

    /* (non-Javadoc)
     * @see java.lang.Object#hashCode()
     */

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserDTO userDTO = (UserDTO) o;

        if (id != userDTO.id) return false;
        if (firstName != null ? !firstName.equals(userDTO.firstName) : userDTO.firstName != null) return false;
        if (lastName != null ? !lastName.equals(userDTO.lastName) : userDTO.lastName != null) return false;
        if (email != null ? !email.equals(userDTO.email) : userDTO.email != null) return false;
        if (gender != userDTO.gender) return false;
        if (date != null ? !date.equals(userDTO.date) : userDTO.date != null) return false;
        return image != null ? image.equals(userDTO.image) : userDTO.image == null;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (firstName != null ? firstName.hashCode() : 0);
        result = 31 * result + (lastName != null ? lastName.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (gender != null ? gender.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (image != null ? image.hashCode() : 0);
        return result;
    }
}
