package com.suitecompiletech.commentsystem;

import java.util.ArrayList;
import java.util.UUID;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.suitecompiletech.commentsystem.controller.CommentController;
import com.suitecompiletech.commentsystem.model.Comment;

public class TestCrud {

	public CommentController commentController;
	
	@Before
	public void setUp() throws Exception {
		commentController = new CommentController();
	}

	@Test
	public void addComment() {
		int curSize = commentController.getComments().size();
		Comment comment = new Comment();
		comment.setText(UUID.randomUUID().toString());
		commentController.getComments().add(comment);
		int newSize = commentController.getComments().size();
		Assert.assertArrayEquals(new int[] {curSize+1}, new int[] {newSize});
	}

}
