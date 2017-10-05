const knex = require('./knex') // the connection

module.exports = {
  getAll() {
    return knex('new_similars')
  },

  getOne(given) {
    return knex('new_similars').where('given', given).andWhere('jaccard', '>', 0)
    .orderBy('jaccard', 'asc').limit(10)
  }
}
