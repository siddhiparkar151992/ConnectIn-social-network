package com.connectin.common.domain;

public class Achievement {
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Achievement [title=" + title + ", decscription=" + decscription + "]";
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((decscription == null) ? 0 : decscription.hashCode());
		result = prime * result + ((title == null) ? 0 : title.hashCode());
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
		Achievement other = (Achievement) obj;
		if (decscription == null) {
			if (other.decscription != null)
				return false;
		} else if (!decscription.equals(other.decscription))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}
	private String title;
	private String decscription;
	/**
	 * @param title
	 * @param decscription
	 */
	public Achievement(String title, String decscription) {
		super();
		this.title = title;
		this.decscription = decscription;
	}
	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}
	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}
	/**
	 * @return the decscription
	 */
	public String getDecscription() {
		return decscription;
	}
	/**
	 * @param decscription the decscription to set
	 */
	public void setDecscription(String decscription) {
		this.decscription = decscription;
	}
	
}
