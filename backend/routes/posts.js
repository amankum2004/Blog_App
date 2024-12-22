const express = require("express");
const BlogPost = require("../models/Post");
const { generateSummary } = require("../utils/ai");
const router = express.Router();

// Create a new post
router.post("/post", async (req, res) => {
  const { title, content } = req.body;
  // const summary = await generateSummary(content); // Call AI model
  const summary = await generateSummary({ inputs: content }); // Call AI model
  console.log("Summary:", summary);
  const newPost = new BlogPost({ title, content, summary });
  await newPost.save();
  res.json(newPost);
});

// Retrieve all posts
router.get("/post", async (req, res) => {
  const posts = await BlogPost.find();
  res.json(posts);
});

// Retrieve a specific post
router.get("/post/:id", async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  res.json(post);
});

// Update a specific post
router.put("/post/:id", async (req, res) => {
  const { title, content } = req.body;
  const summary = await generateSummary(content); // Regenerate summary
  const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, { title, content, summary }, { new: true });
  res.json(updatedPost);
});

// Delete a specific post
router.delete("/post/:id", async (req, res) => {
  await BlogPost.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

module.exports = router;
