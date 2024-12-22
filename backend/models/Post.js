const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  summary: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
