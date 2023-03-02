const router = require("express").Router();
const { User, Post } = require("../../models/");
const withAuth = require("../../utils/auth");

router.put("/next", (req, res) => {
    req.session.save(async () => {
      const totalCount = await Post.count();
      console.log("TOTAL COUNT", totalCount)
      if((req.session.counter+1) * req.session.pageLimit >= totalCount) return
      req.session.counter++;
      console.log(req.session.counter);
      res.json({message:"next success", counter: req.session.counter})
    });
});

router.put("/previous", (req, res) => {
    req.session.save(() => {
      req.session.counter--;
      console.log(req.session.counter);
      res.json({message:"previous success", counter: req.session.counter})
    });
  // }
});

// TODO - create a POST route for creating a new post
// This should be a protected route, so you'll need to use the withAuth middleware
router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body);

    // const userData = await User.findOne({
    //   where: { id: req.session.userId },
    // });

    await Post.create({
      userId: req.session.userId,
      title: req.body.title,
      body: req.body.body,
    });

    res.status(200).json({message: 'created post'});
    // res.redirect("/dashboard")
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO - create a PUT route for updating a post's title or body
// This should be a protected route, so you'll need to use the withAuth middleware
router.put("/:id", withAuth, (req, res) => {
  try {
  // const postData = Post.findOne({
  //   where: {
  //     userId: req.session.userId
  //   }
  // });

  // if (postData.userId === req.session.userId) {
  
  Post.update(
    {
      title: req.body.title,
      body: req.body.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  res.status(200).json({message: 'edited post'});

  // } else {
  //   res.render('homepage')
  // }

  }catch (err) {
    res.json(err);
  }
});

// TODO - create a DELETE route for deleting a post with a specific id
// This should be a protected route, so you'll need to use the withAuth middleware
router.delete("/:id", withAuth, async (req, res) => {
  try{
    Post.destroy({
      where: {
        id: req.params.id,
      }
    })
    res.status(200).json({message: "post destroyed"});
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
