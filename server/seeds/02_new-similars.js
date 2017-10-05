const newSimilars = require('../new-similars')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('new_similars').del()
    .then(function () {
      // Inserts seed entries
      return knex('new_similars').insert(newSimilars);
    });
};
