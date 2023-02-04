const { Post } = require('../models');

const postData = [
  {
    title: 'Title 1',
    body: 'Body 1',
    userId:1,
  },
  {
    title: 'Title 2',
    body: 'Body 2',
    userId:2,
  },
  {
    title: 'Title 3',
    body: 'Body 3',
    userId:3,
  },
  {
    title: 'Title 4',
    body: 'Body 4',
    userId:3,
  },
  {
    title: 'Title 5',
    body: 'Body 5',
    userId:1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;