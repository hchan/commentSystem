package com.suitecompiletech.commentsystem.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.suitecompiletech.commentsystem.model.Comment;

@Controller
@RequestMapping(value = "comment", produces = "application/json")
public class CommentController {
	private ArrayList<Comment> comments = new ArrayList<Comment>();
	
	public ArrayList<Comment> getComments() {
		return comments;
	}

	public void setComments(ArrayList<Comment> comments) {
		this.comments = comments;
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public ArrayList<Comment> findAll() {	
		return comments;
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public void create(@RequestBody Comment comment) {
		comments.add(comment);
	}
}
