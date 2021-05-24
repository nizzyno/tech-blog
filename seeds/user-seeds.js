const { User } = require('../models');

const userData = [
  {
    username: 'Chad',
    password: 'ctomtom',
  },
  {
    username: 'Alex',
    password: 'adaylight',
  },
  {
    username: 'Joel',
    password: 'jdmac',
  },
  {
    username: 'Nigel',
    password: 'rummytoo',
  },
  {
    username: 'Jack',
    password: 'tradesmith',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
