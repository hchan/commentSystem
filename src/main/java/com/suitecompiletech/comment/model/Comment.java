package com.suitecompiletech.comment.model;

import java.util.Date;

public class Comment {
	private String text;
	private Date createdDate = new Date();
	
	
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	
	
}
