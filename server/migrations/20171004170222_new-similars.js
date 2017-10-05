
exports.up = function(knex, Promise) {
  return knex.schema.createTable('new_similars', (table) => {
    table.integer('given')
    table.integer('similar')
    table.float('jaccard')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('new_similars')
};
