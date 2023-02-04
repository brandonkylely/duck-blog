
// Dashboard Routes
// This is a set of routes that will be used to render the dashboard pages.
// All of these routes will be protected by the withAuth middleware function.

const router = require("express").Router();
const { User, Post, Comment } = require("../models/");
const withAuth = require("../utils/auth");

// TODO - create logic for the GET route for / that renders the dashboard homepage
// It should display all of the posts created by the logged in user
router.get("/", withAuth, async (req, res) => {

  const postData = await Post.findAll({
      where: { userId: req.session.userId },
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
      order: [["createdAt", "DESC"]],
  });

  const userPosts = postData.map(post => post.get({ plain: true }));

  // console.log(userPosts);

  res.render("admin-all-posts", { layout: "dashboard", userPosts });
});

// TODO - create logic for the GET route for /new that renders the new post page
// It should display a form for creating a new post
router.get("/new", async (req, res) => {
  try {

  } catch {

  }
});

// TODO - create logic for the GET route for /edit/:id that renders the edit post page
// It should display a form for editing an existing post
router.get("/edit/:id", (req, res) => {

});

module.exports = router;

