'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          display_name: 'Guilherme Marinho',
          email: 'ggattimarinho@gmail.com',
          password: bcrypt.hashSync('123456', 10),
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
