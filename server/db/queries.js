const knex = require('./knex') // the connection

module.exports = {
  getAll() {
    return knex('similars')
  },

  getOne(given) {
    return knex('similars').where('given', given).first()
  }
}
