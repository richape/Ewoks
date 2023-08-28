import { getEwoks, close } from './db.js'

export async function list() {
  try {
    const ewoks = await getEwoks()
    printEwoks(ewoks)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printEwoks(ewoks) {
  ewoks.forEach((ewoks) => {
    console.info(`${ewoks.id}: ${ewoks.name}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
