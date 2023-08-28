import knexfile from './knexfile.js'
import knex from 'knex'

const environment = process.env.NODE_ENV || 'development'
const db = knex(knexfile[environment])

export function getNames(Database) {
  return db(`${Database}`).select('*')
}

// Your DB functions go here
// export function close() {
//   db.destroy()
// }
