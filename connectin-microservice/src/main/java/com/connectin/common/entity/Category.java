package com.connectin.common.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="category")
public class Category {
	
	@Id
	@Column(name="cat_id", columnDefinition="int(11)")
	private int categoryId;
	
	@Column(name="cat_name")
	private String categoryName;
	
	@Column(name="parent")
	private int parent;

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public int getParent() {
		return parent;
	}

	public void setParent(int parent) {
		this.parent = parent;
	}
	
	
	
	
}
