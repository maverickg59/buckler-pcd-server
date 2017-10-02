const express = require('express')

const router = express.Router()

const queries = require('../db/queries')

// function isValidId(req, res, next) {
//   var given = parseInt(req.params.given)
//   if(isNaN(given)) return next()
//   next(new Error('Invalid ID'))
// }

router.get('/', (req, res) => {
    queries.getAll().then(similars => {
      res.json(similars)
    })
  })

router.get('/:given', (req, res) => {
    queries.getOne(req.params.given).then(similar => {
      if(similar) {
        res.json(similar)
      } else {
        res.status(404)
      }
    })
  })

module.exports = router
