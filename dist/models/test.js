"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const BlogSchema = new Schema({
    author: {
        type: String,
        required: true
    },
});
const Blog = mongoose.model('Blog', BlogSchema);
exports.Blog = Blog;
