const { Comment } = require('../models');

const commentData = [
  {
    body: 'Comment 1',
    postId: 1,
  },
  {
    body: 'Comment 2',
    postId: 2,
  },
  {
    body: 'Comment 3',
    postId: 3,
  },
  {
    body: 'Comment 4',
    postId: 4,
  },
  {
    body: 'Comment 5',
    postId: 1,
  },
  {
    body: 'Comment 6',
    postId: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;