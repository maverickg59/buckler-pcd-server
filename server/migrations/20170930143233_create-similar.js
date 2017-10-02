
exports.up = function(knex, Promise) {
  return knex.schema.createTable('similars', (table) => {
    table.integer('given')
    table.integer('similar1')
    table.integer('similar2')
    table.integer('similar3')
    table.integer('similar4')
    table.integer('similar5')
    table.integer('similar6')
    table.integer('similar7')
    table.integer('similar8')
    table.integer('similar9')
    table.integer('similar10')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('similars')
};
