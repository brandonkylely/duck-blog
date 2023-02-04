// homeroutes contains all the view routes that do not require any authentication
const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// TODO - work on GET route for getting all posts
// this page can be viewed without logging in
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({order: [["createdAt", "DESC"]],});

    const allPosts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", { allPosts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO - create a GET route for getting a single post with its id
// this page can be viewed without logging in
router.get("/post/:id", (req, res) => {

});

// This route renders the login page, which has been completed for you
router.get("/login", (req, res) => {
  //if users has an existing valid session, they will be redirected to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  //render the login view otherwise, refer to login.handlebars
  res.render("login");
});

// This route renders the signup page, which has been completed for you
router.get("/signup", (req, res) => {
  //if users has an existing valid session, they will be redirected to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  //render the login view otherwise, refer to signup.handlebars
  res.render("signup");
});

module.exports = router;
