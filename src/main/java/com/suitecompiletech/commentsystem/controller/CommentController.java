package com.suitecompiletech.commentsystem.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.suitecompiletech.commentsystem.model.Comment;
import com.suitecompiletech.commentsystem.model.User;

@Controller
@RequestMapping(value = "comment", produces = "application/json")
public class CommentController {
	private static ArrayList<Comment> comments = new ArrayList<Comment>();
	// dummy data
	static {
		Comment comment = new Comment();
		User user = new User();
		user.setFirstName("Henry");
		user.setLastName("Chan");
		user.setProfile("Level 90 Warrior");
		comment.setText("LFG - I can tank");
		comment.setUser(user);
		comments.add(comment);
		
		comment = new Comment();
		user = new User();
		user.setFirstName("Malfurion");
		user.setLastName("Stormrage");
		user.setProfile("Level 90 Druid");
		comment.setText("Henry's - what is your iLvl?");
		comment.setUser(user);
		comments.add(comment);
	}
	
	public ArrayList<Comment> getComments() {
		return comments;
	}

	public void setComments(ArrayList<Comment> comments) {
		CommentController.comments = comments;
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
