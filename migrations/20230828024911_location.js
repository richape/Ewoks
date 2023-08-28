export function up(knex) {
  return knex.schema.createTable('location', function (table) {
    table.increments('id').primary()
    table.string('location')
  })
}

export function down(knex) {
  return knex.schema.dropTable('location')
}
