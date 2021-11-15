const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'user1',
    email: 'user1@test.com',
    password: 'password123'
  },
  {
    username: 'user2',
    email: 'user2@test.com',
    password: 'password123'
  },
  {
    username: 'user3',
    email: 'user3@test.com',
    password: 'password123'
  },
  {
    username: 'user4',
    email: 'user4@test.com',
    password: 'password123'
  },
  {
    username: 'user5',
    email: 'user5@test.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers; 