const Post = require("../models/post.model")

const createPost = async (postData) => {
  if(typeof postData != 'object'){
    return null;
  }
  const newPost = await Post.create(postData);
  return newPost;

}

const getAllPosts = async ()=> {
  const allposts = Post.findAll({order: ["createdAt","disc"]});
  return allposts
}

module.exports = {createPost,getAllPosts}