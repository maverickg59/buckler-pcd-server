const similars = require('../similars')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('similars').del()
    .then(function () {
      // Inserts seed entries
      return knex('similars').insert(similars);
    });
};
