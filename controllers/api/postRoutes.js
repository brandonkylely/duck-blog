const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");

// TODO - create a POST route for creating a new post
// This should be a protected route, so you'll need to use the withAuth middleware
router.post("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.userId },
    });

    const postData = await Post.create({
      username: userData.username,
      title: req.body.title,
      body: req.body.body,
    });

    res.redirect("/dashboard");
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO - create a PUT route for updating a post's title or body
// This should be a protected route, so you'll need to use the withAuth middleware
router.put("/:id", withAuth, (req, res) => {});

// TODO - create a DELETE route for deleting a post with a specific id
// This should be a protected route, so you'll need to use the withAuth middleware
router.delete("/:id", withAuth, (req, res) => {});

module.exports = router;
