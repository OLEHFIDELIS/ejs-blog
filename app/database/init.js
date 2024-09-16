const User = require("../models/user.model");
const Post = require("../models/post.model");
const Category = require("../models/category.model");

const InitializeDB = async () => {
    User.hasMany(Post),{
        // foreignKey: "userId"
    };
    Post.belongsTo(User);
    Category.hasMany(Post);
    // Post.hasOne(Category);

    await Promise.all([
        User.sync({alter:true}),
        Post.sync({alter:true}),
        Category.sync({alter:true}),
    ])
}

module.exports  = {InitializeDB}