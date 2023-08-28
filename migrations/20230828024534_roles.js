export function up(knex) {
  return knex.schema.createTable('roles', function (table) {
    table.increments('id').primary()
    table.string('roles')
  })
}

export function down(knex) {
  return knex.schema.dropTable('roles')
}
