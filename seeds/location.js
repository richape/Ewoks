export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('location').del()
  await knex('location').insert([
    {
      id: -199 - 255,
      location: 'Bright Tree Village on The Forest Moon of Endor',
    },
  ])
}
