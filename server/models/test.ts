import mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const BlogSchema = new Schema({
    author: {
        type: String,
        required: true
    },
});

const Blog = mongoose.model('Blog', BlogSchema);

export {Blog};