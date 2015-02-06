package com.suitecompiletech.commentsystem.model;

import java.util.Date;

public class Comment {
	private String text;
	private Date createdDate = new Date();
	private User user = new User();
	
	
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
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	
}
