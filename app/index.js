
const express = require("express");
require('dotenv').config()
const path = require("path");
const {InitializeDB} = require("../app/database/init");
const seedRecords = require("./seeder/index.seeder")
const app = express();
const PORT = 3000

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));



//  DATABASE LEVEL - TABLES (EACH TABLE HAS COLUMNS)
// CODE LEVEL  - DATABASE BECOME (MODELS) - A TABLE Becomes a MODEL -> Columns become (PROPERTIES)


app.get("/", (req, res) => {
    try {
        return res.render("pages/home", { blogPosts });
    } catch (e) {
        return res.render("pages/404", { message: e.message });
    }
})

app.get("/seed-data", async (req, res) => {
    try {
        if(process.env.ENVIROMENT == "dev"){
            await seedRecords();
        }
        return res.json({message:"Seed Worked"});
    } catch (e) {
        return res.render("pages/404", { message: e.message });
    }
})



app.get("/post/:id", (req, res) => {
    try {
        const postId = req.params.id;
        let postsData = blogPosts.filter((post) => (post.id == postId));
        if (postsData.length == 0) {
            return res.render("pages/404", { message: "Post does not exist" });
        }
        const post = postsData[0];
        return res.render("pages/post", { post });
    } catch (e) {
        return res.render("pages/404", { message: e.message });
    }
})

app.listen(PORT, async() => {
    await InitializeDB();
    console.log("Listening to PORT " + PORT);
})

// -- MVC DESIGN PATTERN
//

// - FRONT 