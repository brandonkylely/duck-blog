const { Comment } = require('../models');

const commentData = [
  {
    body: 'Comment 1',
    postId: 1,
    userId: 1,
  },
  {
    body: 'Comment 2',
    postId: 1,
    userId: 2,
  },
  {
    body: 'Comment 3',
    postId: 3,
    userId: 3,
  },
  {
    body: 'Comment 4',
    postId: 4,
    userId: 4,
  },
  {
    body: 'Comment 5',
    postId: 3,
    userId: 1,
  },
  {
    body: 'Comment 6',
    postId: 2,
    userId: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;