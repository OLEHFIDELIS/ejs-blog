const Post = require("../models/post.model")

const createPost = async (postData) => {
  if(typeof postData != 'object'){
    return null;
  }
  const newPost = await Post.create(postData);
  return newPost;

}



module.exports = {createPost}