
exports.up = function(knex) {
  return knex.schema.createTable('cars', (tbl) => {
      tbl.increments();
      tbl.integer('VIN Number').notNullable();
      tbl.text('make').notNullable();
      tbl.text('model').notNullable();
      tbl.integer('mileage').notNullable();
      tbl.text('Transmission Type');
      tbl.text('Title Status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
