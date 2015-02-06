package com.suitecompiletech.comment.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.suitecompiletech.comment.model.Comment;

@Controller
@RequestMapping(value = "comment", produces = "application/json")
public class CommentController {
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public ArrayList<Comment> findAll() {
		ArrayList<Comment> retval = new ArrayList<Comment>();
		Comment comment = new Comment();
		comment.setText("abc");
		retval.add(comment);
		return retval;
	}

}
