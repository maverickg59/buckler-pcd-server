const express = require('express')

const router = express.Router()

const queries = require('../db/new-similars')

// function isValidId(req, res, next) {
//   var given = parseInt(req.params.given)
//   if(isNaN(given)) return next()
//   next(new Error('Invalid ID'))
// }

router.get('/', (req, res) => {
    queries.getAll().then(newSimilars => {
      res.json(newSimilars)
    })
  })

router.get('/:given', (req, res) => {
    queries.getOne(req.params.given).then(newSimilar => {
      if(newSimilar) {
        res.json(newSimilar)
      } else {
        res.status(404)
      }
    })
  })

module.exports = router
