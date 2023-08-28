export function up(knex) {
  return knex.schema.createTable('ewoks', function (table) {
    table.increments('id').primary()
    table.string('name')
  })
}

export function down(knex) {
  return knex.schema.dropTable('ewoks')
}
