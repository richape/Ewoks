import express from 'express'
import * as db from './db/db.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/server/ewoks.js', async (req, res) => {
  const ewoks = await db.getNames('ewoks.js')
  const viewData = { ewoks }
  res.render('ewoks-names.js', viewData)
})

export default router
