// homeroutes contains all the view routes that do not require any authentication
const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// TODO - work on GET route for getting all posts
// this page can be viewed without logging in
router.get("/", async (req, res) => {
  console.log("counter " + req.session.counter);
  console.log("id " + req.session.userId);
  console.log("username " + req.session.username);
  // req.session.counter=0;
  if (req.session.counter < 0) {
    req.session.counter = 0;
  }

  req.session.pageLimit = 3;
  const page = req.session.counter? (req.session.counter * req.session.pageLimit) : 0;

  try {
    const postData = await Post.findAll(
      {
      order: [["createdAt", "DESC"]],
      include: [
        {
            model: User,
            attributes: ["username"],
        },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
      },
    ],
      limit: req.session.pageLimit,
      offset: page,
    });

    const allPosts = postData.map((post) => post.get({ plain: true }));

    // console.log(allPosts);

    res.render("homepage", { allPosts, loggedIn: req.session.loggedIn, pageNumber: (req.session.counter + 1) });
  } catch (err) {
    // req.session.counter = 0;
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
