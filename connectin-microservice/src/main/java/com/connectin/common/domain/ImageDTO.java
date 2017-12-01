package com.connectin.common.domain;

import com.connectin.constants.ImageOwnerType;

import java.io.Serializable;

public class ImageDTO implements Serializable {
    private String url;
    private String alt;
    private ImageOwnerType type;

    public ImageDTO(String url, String alt, ImageOwnerType type) {
        if(url!=null) this.url = url;
        if(url!=null) this.alt = alt;
        if(url!=null) this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getAlt() {
        return alt;
    }

    public void setAlt(String alt) {
        this.alt = alt;
    }

    public ImageOwnerType getType() {
        return type;
    }

    public void setType(ImageOwnerType type) {
        this.type = type;
    }

    public ImageDTO() {

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ImageDTO imageDTO = (ImageDTO) o;

        if (url != null ? !url.equals(imageDTO.url) : imageDTO.url != null) return false;
        if (alt != null ? !alt.equals(imageDTO.alt) : imageDTO.alt != null) return false;
        return type == imageDTO.type;
    }

    @Override
    public int hashCode() {
        int result = url != null ? url.hashCode() : 0;
        result = 31 * result + (alt != null ? alt.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        return result;
    }
}
