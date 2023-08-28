export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ewoks').del()
  await knex('ewoks').insert([
    { id: 801, name: 'Chief Chirpa' },
    { id: 802, name: 'Logray' },
    { id: 803, name: 'Flitchee' },
    { id: 804, name: 'Wunka' },
    { id: 805, name: 'Princess Kneesaa' },
    { id: 806, name: 'Teebo' },
    { id: 807, name: 'Deej Warrick' },
    { id: 808, name: 'Wicket W. Warrick' },
  ])
}
