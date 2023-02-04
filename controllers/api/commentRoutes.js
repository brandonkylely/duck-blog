const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

// TODO - create a POST route for creating a new comment
// This should be a protected route, so you'll need to use the withAuth middleware
router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = Comment.create({
      userId: req.body.userId,
      body: req.body.body,
    });
    res.redirect("/dashboard");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
