const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

// TODO - create a POST route for creating a new comment
// This should be a protected route, so you'll need to use the withAuth middleware
router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const userData = await User.findOne({
      where: { id: req.session.userId },
    });

    const postData = await Post.findOne({
      where: { id: req.body.postId },
    });

    const commentData = Comment.create({
      userId: userData.id,
      postId: postData.id,
      body: req.body.body,
    });


    res.json({message: "comment created"});
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
