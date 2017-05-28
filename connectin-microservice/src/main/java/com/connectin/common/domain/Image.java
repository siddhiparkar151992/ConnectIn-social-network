package com.connectin.common.domain;

import java.io.Serializable;

public class Image implements Serializable{
	private int id;
	private String url;
	private String alt;
	/**
	 * @param id
	 * @param url
	 * @param alt
	 */
	public Image(int id, String url, String alt) {
		super();
		this.id = id;
		this.url = url;
		this.alt = alt;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((alt == null) ? 0 : alt.hashCode());
		result = prime * result + id;
		result = prime * result + ((url == null) ? 0 : url.hashCode());
		return result;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Image other = (Image) obj;
		if (alt == null) {
			if (other.alt != null)
				return false;
		} else if (!alt.equals(other.alt))
			return false;
		if (id != other.id)
			return false;
		if (url == null) {
			if (other.url != null)
				return false;
		} else if (!url.equals(other.url))
			return false;
		return true;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Image [id=" + id + ", url=" + url + ", alt=" + alt + "]";
	}
	
}
