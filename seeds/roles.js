export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('roles').del()
  await knex('roles').insert([
    { id: 991, roles: 'Chief' },
    { id: 992, roles: 'Village Shaman' },
    { id: 993, roles: 'Master of War' },
    { id: 994, roles: 'Warrior' },
    { id: 995, roles: 'Warrior Princess' },
    { id: 996, roles: 'Master Hunter' },
    { id: 997, roles: 'Wickets Father' },
    { id: 998, roles: 'Brave young Warrior' },
  ])
}
